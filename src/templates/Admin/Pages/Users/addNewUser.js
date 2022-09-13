import React, { Fragment, useState, useEffect } from "react";
import './../../style/StylePages.css';
import { Modal, Row, Col, Form, Input, Button, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { GROUPID } from "../../../../utilities/Settings/config";
import { signUpAction, updateUserAction, addUserAction } from "../../../../redux/actions/userManagermentAction";

const { Option } = Select;

export default function AddNewUsers(props) {
  // const [componentSize, setComponentSize] = useState("default");
  
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  
  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };
  const capNhat = props.capNhat
  
  useEffect(()=>{
    if (props.type == 'update') {
      form.setFieldsValue({
        taiKhoan: capNhat.taiKhoan,
        matKhau: capNhat.matKhau,
        hoTen: capNhat.hoTen,
        soDt: capNhat.soDt,
        maLoaiNguoiDung: capNhat.maLoaiNguoiDung,
        email: capNhat.email,
       
      });

    }else{
      form.setFieldsValue({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        email: "",
      })
    }
  },[props.type,capNhat])
  const onFinish = (values) => {
    if(props.type=='insert'){
        dispatch(addUserAction(values));
    }if(props.type=='update'){
        console.log('update',values);
        dispatch(updateUserAction(values));
    }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
}
  // const formik = useFormik({
  //   initialValues: {
  //     taiKhoan: "",
  //     matKhau: "",
  //     hoTen: "",
  //     soDT: "",
  //     maLoaiNguoiDung: "",
  //     maNhom: GROUPID,
  //     email: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log({values})
  //     dispatch(signUpAction(values));
  //   },
  // });

  return (
    <div>
        <Modal title={<div className="modalTitle">
            <span className="modalInform">{props.type == 'update' ? 'CẬP NHẬT NGƯỜI DÙNG' : 'THÊM NGƯỜI DÙNG'}</span>
        </div>} visible={props.show}
            footer={null} onCancel={props.close}
        >
            <Form
                name="basic"
                form={form}
                onFinish={onFinish}
                initialValues={{}}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="Tài Khoản"
                            name="taiKhoan"
                            rules={[{ required: true, message: 'Hãy nhập tài khoản!' }]}
                            labelCol={{ span: 8 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Mật Khẩu"
                            name="matKhau"
                            rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
                            labelCol={{ span: 0 }}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Họ Tên"
                            name="hoTen"
                            rules={[{ required: true, message: 'Hãy nhập họ tên!' }]}
                            labelCol={{ span: 8 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Số ĐT"
                            name="soDt"
                            rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
                            labelCol={{ span: 8 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Hãy nhập email!' }]}
                            labelCol={{ span: 8 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Loại User"
                            name="maLoaiNguoiDung"
                            rules={[{ required: true, message: 'Hãy nhập loại người dùng!' }]}
                            labelCol={{ span: 8 }}
                        >
                            <Select  onChange={handleChange}>
                                <Option value="GV">Giáo vụ</Option>
                                <Option value="HV">Học viên</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={props.close}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    </div>

)
  // return (
  //   <Fragment>
  //     <div className="py-12">
  //       <div className="max-w-7xl flex flex-row items-center mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
  //         <span
  //           className="text-3xl font-semibold text-gray-900"
  //           style={{ color: "#E96036" }}
  //         >
  //           Thêm người dùng
  //         </span>
  //       </div>
  //       <div className="max-w-7xl mx-auto xl:px-0 sm:px-6 md:px-8">
  //         <div
  //           className="my-6 py-12 shadow-xl bg-white"
  //           style={{ border: "1px solid #ddd" }}
  //         >
  //           <Form
  //             onSubmitCapture={formik.handleSubmit}
  //             labelCol={{
  //               span: 3,
  //             }}
  //             wrapperCol={{
  //               span: 14,
  //             }}
  //             layout="horizontal"
  //             initialValues={{
  //               size: componentSize,
  //             }}
  //             onValuesChange={onFormLayoutChange}
  //             size={componentSize}
  //           >
  //             <Form.Item label="Tài khoản">
  //               <Input name="taiKhoan" onChange={formik.handleChange} />
  //             </Form.Item>
  //             <Form.Item label="Mật khẩu">
  //               <Input name="matKhau" onChange={formik.handleChange} />
  //             </Form.Item>
  //             <Form.Item label="Họ và tên">
  //               <Input name="hoTen" onChange={formik.handleChange} />
  //             </Form.Item>
  //             <Form.Item label="Số điện thoại">
  //               <Input name="soDT" onChange={formik.handleChange} />
  //             </Form.Item>
  //             <Form.Item label="Email">
  //               <Input name="email" onChange={formik.handleChange} />
  //             </Form.Item>
  //             <Form.Item label="Loại người dùng">
  //               <Select name="maLoaiNguoiDung" placeholder="Chọn loại người dùng" onChange={(values)=> formik.setFieldValue('maLoaiNguoiDung', values )} >
  //                 <Select.Option value="HV">Học viên</Select.Option>
  //                 <Select.Option value="GV">Giáo vụ</Select.Option>
  //               </Select>
  //             </Form.Item>          
  //             <Form.Item label="Mã nhóm">
  //               {GROUPID}
  //             </Form.Item>
             
  //             <Form.Item
  //               wrapperCol={{
  //                 offset: 3,
  //               }}
  //               label=""
  //             >
  //               <button
  //                 className="py-2 px-8 hover:shadow-xl transition-all duration-150"
  //                 type="submit"
  //                 style={{ backgroundColor: "#e96036", color: "#fff" }}
  //               >
  //                 Thêm người dùng
  //               </button>
  //             </Form.Item>
  //           </Form>
  //         </div>
  //       </div>
  //     </div>
  //   </Fragment>
  // );
}
