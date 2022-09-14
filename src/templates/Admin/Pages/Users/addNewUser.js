import React, {useEffect } from "react";
import './../../style/StylePages.css';
import { Modal, Row, Col, Form, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";

import { updateUserAction, addUserAction } from "../../../../redux/actions/userManagermentAction";

const { Option } = Select;

export default function AddNewUsers(props) {
  
  const dispatch = useDispatch();
  const [form] = Form.useForm();
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
}
