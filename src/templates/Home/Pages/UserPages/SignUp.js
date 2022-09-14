
import React, { Fragment } from "react";
import { Modal} from 'antd';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../Style/StylePages.css";
import { history } from "../../../../App";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../redux/actions/userManagermentAction";
import { GROUPID } from "../../../../utilities/Settings/config";

export default function Signup() {
  
  const countDown = () =>{
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'Đăng ký tài khoản thành công',
    content: `Thông báo tự động tắt sau ${secondsToGo}s.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Thông báo tự động tắt sau ${secondsToGo}s.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: GROUPID,
      email: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(6, "Minimum 6 charaters")
        .max(20, "Maximum 20 characters")
        .required("Required!"),
      matKhau: Yup.string().required("Required!"),
      hoTen: Yup.string().required("Required!"),
      soDT: Yup.string().required("Required!"),
      email: Yup.string().email("Email đúng định dạng phải là email@email.com").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(signUpAction(values, countDown));
    },
  });

  return (
    <Fragment>
      <div className="grid grid-flow-row gap-x-8 px-5 pt-5">
        <div className="w-fit place-self-center">
          <h2 className="my-8 text-center text-4xl ">Sign Up</h2>
        </div>
        <div className="mt-2 pb-10">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="text-sm font-bold font-body text-gray-700 tracking-wide">
                Tên tài khoản
              </div>
              <input
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
              />

              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p className="text-red-600">{formik.errors.taiKhoan}</p>
              )}
            </div>
            <div className="mt-8 passwordSignIn">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-600">{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Họ & tên của bạn:
                </div>
              </div>
              <input
                name="hoTen"
                value={formik.values.hoTen}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
              />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <p className="text-red-600">{formik.errors.hoTen}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Số điện thoại:
                </div>
              </div>
              <input
                name="soDT"
                value={formik.values.soDT}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
              />
              {formik.errors.soDT && formik.touched.soDT && (
                <p className="text-red-600">{formik.errors.soDT}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email:
                </div>
              </div>
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-600">{formik.errors.email}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mã nhóm: {GROUPID}
                </div>
              </div>
           
            </div>

            <div className="mt-10">
              <button
                countDown={countDown}
                className="text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline
                          shadow-lg"
                style={{ backgroundColor: "#E96036" }}
              >
                Đăng ký
              </button>
            </div>
          </form>
          <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
            <div>
              Bạn đã có tài khoản ?{" "}
              <button
                onClick={() => {
                  history.push("/signin");
                }}
                className="cursor-pointer"
                style={{ color: "#E96036" }}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}