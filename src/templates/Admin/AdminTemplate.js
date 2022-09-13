import { Redirect, Route } from "react-router";
import { Menu } from "antd";
import "./style/StyleAdmin.css";
import { Fragment } from "react";
import {
  DotsHorizontalIcon,
  AcademicCapIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  PlusCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { TOKEN, USER_SIGNIN } from "../../utilities/Settings/config";
import { useSelector } from "react-redux";
import { history } from "../../App";
import _ from "lodash";
import { Link } from "react-router-dom";

export default function AdminTemplate(props) {
  const { Component, ...restProps } = props;

  const { userSignIn } = useSelector((state) => state.UserManagermentReducer);

  const { SubMenu } = Menu;

  if (!localStorage.getItem(USER_SIGNIN)) {
    return <Redirect to="/alert" />;
  }

  if (userSignIn.maLoaiNguoiDung !== "GV") {
    return <Redirect to="/alert" />;
  }

  const renderSignIn = () => {
    if (!_.isEmpty(userSignIn)) {
      return (
    
            <div className="max-w-xs bg-white flex items-center text-sm hover:bg-transparent">
              <img
                className="h-8 w-8 rounded-full"
                src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg"
                alt=""
              />
              <span className="mr-3 font-medium">
                {userSignIn.taiKhoan}
              </span>
              
              <button
                onClick={() => {
                  history.push("/profile");
                }}
                className=" px-3 py-2 text-sm text-gray-700 hover:text-red-400"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem(USER_SIGNIN);
                  localStorage.removeItem(TOKEN);
                  window.location.replace("/");
                }}
                className=" px-3 py-2 text-sm text-gray-700 hover:text-red-400"
              >
                Đăng xuất
              </button>
            </div>

      );
    }
  };

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <div className="h-screen flex overflow-hidden bg-gray-100">
              <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64">
                  <div className="flex flex-col h-0 flex-1">
                    <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                      <img
                        className="h-8 w-auto cursor-pointer"
                        src="/images/logo-white.png"
                        alt="Cybersoft"
                        width="100%"
                        onClick={() => {
                          history.push("/");
                        }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col overflow-y-auto">
                      <Menu
                        className="flex-1 px-2 py-4 bg-gray-800 space-y-1 "
                        style={{
                          width: 256,
                          backgroundColor: "#1F2937",
                          color: "#fff",
                        }}
                      >
                        <SubMenu
                          key="sub1"
                          title="Quản lý khoá học"
                          icon={<AcademicCapIcon width="15" />}
                        >
                          <Menu.Item
                            key="2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Link
                              to="/admin/courses"
                              style={{ display: "flex" }}
                            >
                              <DotsHorizontalIcon className="mr-2" width="15" />
                              Danh sách khoá học
                            </Link>
                          </Menu.Item>
                          <Menu.Item
                            key="3"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Link
                              to="/admin/courses/add-new"
                              style={{ display: "flex" }}
                            >
                              <PlusCircleIcon className="mr-2" width="15" />
                              Thêm khoá học
                            </Link>
                          </Menu.Item>
                        </SubMenu>
                        <SubMenu
                          key="sub2"
                          title="Quản lý người dùng"
                          icon={<UsersIcon width="15" />}
                        >
                          <Menu.Item
                            key="4"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Link
                              to="/admin/users"
                              style={{ display: "flex" }}
                            >
                              <DotsHorizontalIcon className="mr-2" width="15" />
                              Danh sách người dùng
                            </Link>
                          </Menu.Item>
                          {/* <Menu.Item key="5" style={{ display: "flex", alignItems: "center" }}>
                            <Link
                              to="/admin/users/add-new"
                              style={{ display: "flex" }}
                            >
                              <PlusCircleIcon className="mr-2" width="15" />
                              Thêm người dùng
                            </Link>
                          </Menu.Item> */}
                        </SubMenu>      
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
                  <div className="flex-1 px-4 flex justify-end">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Menu as="div" className="ml-3 relative">
                        {renderSignIn()}
                      </Menu>
                    </div>
                  </div>
                </div>

                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                  <Component {...propsRoute} />
                </main>
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
}
