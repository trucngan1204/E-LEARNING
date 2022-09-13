import React, { Fragment, useState } from "react";
import './../../style/StylePages.css';
import { Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { GROUPID } from "../../../../utilities/Settings/config";
import { signUpAction } from "../../../../redux/actions/userManagermentAction";

export default function AddNewUsers() {
  const [componentSize, setComponentSize] = useState("default");

  const dispatch = useDispatch();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: GROUPID,
      email: "",
    },
    onSubmit: (values) => {
      console.log({values})
      dispatch(signUpAction(values));
    },
  });

  return (
    <Fragment>
      <div className="py-12">
        <div className="max-w-7xl flex flex-row items-center mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <span
            className="text-3xl font-semibold text-gray-900"
            style={{ color: "#E96036" }}
          >
            Add new user
          </span>
        </div>
        <div className="max-w-7xl mx-auto xl:px-0 sm:px-6 md:px-8">
          <div
            className="my-6 py-12 shadow-xl bg-white"
            style={{ border: "1px solid #ddd" }}
          >
            <Form
              onSubmitCapture={formik.handleSubmit}
              labelCol={{
                span: 3,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Form.Item label="Tài khoản">
                <Input name="taiKhoan" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Mật khẩu">
                <Input name="matKhau" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Họ và tên">
                <Input name="hoTen" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Số điện thoại">
                <Input name="soDT" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Email">
                <Input name="email" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Loại người dùng">
                <Select name="maLoaiNguoiDung" placeholder="Chọn loại người dùng" onChange={(values)=> formik.setFieldValue('maLoaiNguoiDung', values )} >
                  <Select.Option value="HV">Học viên</Select.Option>
                  <Select.Option value="GV">Giáo vụ</Select.Option>
                </Select>
              </Form.Item>          
              <Form.Item label="Mã nhóm">
                {GROUPID}
              </Form.Item>
             
              <Form.Item
                wrapperCol={{
                  offset: 3,
                }}
                label=""
              >
                <button
                  className="py-2 px-8 hover:shadow-xl transition-all duration-150"
                  type="submit"
                  style={{ backgroundColor: "#e96036", color: "#fff" }}
                >
                  Add user
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
