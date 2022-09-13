import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../Style/StylePages.css";
import { history } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../../redux/actions/userManagermentAction";
import _ from "lodash";

export default function SignIn({ setShowModal }) {
  const dispatch = useDispatch();

    const { userSignIn } = useSelector((state) => state.UserManagermentReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(6, "Minimum 6 charaters")
        .max(20, "Maximum 20 characters")
        .required("Không được để trống"),
      matKhau: Yup.string().required("Không được để trống!"),
    }),
    onSubmit: (values) => {
      dispatch(signInAction(values, setShowModal));
    },
  });

  const SignIn = ()=>{

    if (_.isEmpty(userSignIn)) {
      return (
                <div
                  className="lg:grid grid-flow-row gap-x-8 px-1 lg:px-5 pt-5 "
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div>
                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                          Tài khoản
                        </div>
                        <input
                          name="taiKhoan"
                         value={formik.values.taiKhoan}
                          onChange={formik.handleChange}
                          className="w-full text-base lg:text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                        />
          
                        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                          <p className="text-red-600">{formik.errors.taiKhoan}</p>
                        )}
                      </div>
                      <div className="mt-4 lg:mt-8 passwordSignIn">
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
                          className=" w-full text-base lg:text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                        />
                        {formik.errors.matKhau && formik.touched.matKhau && (
                          <p className="text-red-600">{formik.errors.matKhau}</p>
                        )}
                      </div>
                      <div className="mt-5 lg:mt-10">
                        <button
                        type="submit"
                        onClick ={formik.handleSubmit}
                          className="text-gray-100 p-4 w-full rounded-full tracking-wide
                                    font-semibold font-display focus:outline-none focus:shadow-outline
                                    shadow-lg"
                          style={{ backgroundColor: "#E96036" }}
                        >
                          Đăng nhập
                        </button>
                      </div>
                    </form>
                    <div className="mt-8 text-sm font-display text-gray-700 text-center">
                      <div className="mb-2 lg:mb-5">
                        <a
                          href="#!"
                          className="text-md font-semibold cursor-pointer"
                          style={{ color: "#E96036" }}
                        >
                          Quên mật khẩu
                        </a>
                      </div>
                      <div>
                        Chưa có tài khoản ? {" "}
                        <button
                          onClick={() => {
                            history.push("/signup");
                          }}
                          className="cursor-pointer font-semibold "
                          style={{ color: "#E96036" }}
                        >
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-fit lg:place-self-center">
                    <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-4">
                      <button className="google-login-btn lg:mt-5 flex items-center text-gray-500 text-sm lg:text-base p-5 rounded-lg transition-colors">
                        <svg
                          className="mr-3 google-login rounded-lg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_28:3796)">
                            <path
                              d="M21.823 9H19.636V11.177H17.459V13.364H19.636V15.541H21.823V13.364H24V11.177H21.823V9Z"
                              fill="white"
                            />
                            <path
                              d="M7.5 19.5C11.828 19.5 14.703 16.462 14.703 12.174C14.703 11.683 14.652 11.304 14.581 10.926H7.501V13.504H11.758C11.584 14.599 10.469 16.737 7.501 16.737C4.944 16.737 2.856 14.619 2.856 12C2.856 9.381 4.943 7.262 7.501 7.262C8.964 7.262 9.936 7.886 10.489 8.418L12.525 6.464C11.214 5.237 9.526 4.5 7.5 4.5C3.356 4.5 0 7.856 0 12C0 16.144 3.356 19.5 7.5 19.5Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_28:3796">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                         Google
                      </button>
                      <button className="facebook-login-btn lg:mt-5 flex items-center text-gray-500 text-sm lg:text-base p-5 rounded-lg transition-colors">
                        <svg
                          className="mr-3 facebook-login  rounded-lg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <rect
                                fill="#fff"
                                class="cls-1"
                                x="4.93"
                                y="2.4"
                                width="14.15"
                                height="19.2"
                              />
                              <path
                                fill="#139CF7"
                                d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM16,7H14.08c-.62,0-1.08.25-1.08.89V9h3l-.24,3H13v8H10V12H8V9h2V7.08C10,5.06,11.06,4,13.46,4H16Z"
                              />
                            </g>
                          </g>
                        </svg>
                         Facebook
                      </button>
                      <button className="github-login-btn lg:mt-5 flex items-center text-gray-500 text-sm lg:text-base p-5 rounded-lg transition-colors">
                        <svg
                          className="mr-3 github-login rounded-lg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <rect
                                fill="#fff"
                                class="cls-1"
                                x="2.35"
                                y="3.17"
                                width="19.39"
                                height="17.68"
                              />
                              <path d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM14.53,19.59c-.4.08-.53-.17-.53-.38V17a1.89,1.89,0,0,0-.55-1.48c1.78-.2,3.65-.88,3.65-3.95a3.07,3.07,0,0,0-.82-2.14,2.88,2.88,0,0,0-.08-2.12s-.67-.22-2.2.82a7.54,7.54,0,0,0-4,0c-1.53-1-2.2-.82-2.2-.82a2.85,2.85,0,0,0-.08,2.11,3.11,3.11,0,0,0-.82,2.15c0,3.07,1.86,3.75,3.64,4A1.73,1.73,0,0,0,10,16.61a1.72,1.72,0,0,1-2.33-.67,1.68,1.68,0,0,0-1.22-.83s-.78,0-.06.49a2.12,2.12,0,0,1,.89,1.17s.46,1.43,2.69.95V19.2c0,.22-.13.46-.53.39a8,8,0,1,1,5.06,0Z" />
                            </g>
                          </g>
                        </svg>
                         Github
                      </button>
                    </div>
                   
                  </div>
                  <p className="mt-4 mb-8 lg:my-8 text-center text-sm lg:text-base text-gray-500 ">
                    
                  </p>
                </div>
              );
    } else {
      return history.replace("/")
    }
}

  return (
    <Fragment>
      {SignIn()}
    </Fragment>
  );
}
