import React, { Fragment } from "react";
import "./../../style/StyleAdmin.css";
import { PencilAltIcon, SearchIcon, TrashIcon } from "@heroicons/react/outline";
import { Button, Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { history } from "./../../../../App";
import {
  deleteUserAction,
  getUserListAction,
} from "../../../../redux/actions/userManagermentAction";

export default function User({ tuKhoa }) {
  const { userList } = useSelector((state) => state.UserManagermentReducer);

  const dispatch = useDispatch();

  const { Search } = Input;

  useEffect(() => {
    dispatch(getUserListAction(tuKhoa));
  }, []);

  const columns = [
    {
      title: "User name",
      dataIndex: "taiKhoan",
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
      width: "10%",
    },
    {
      title: "Full name",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let courseA = a.hoTen.toLowerCase().trim();
        let courseB = b.hoTen.toLowerCase().trim();
        if (courseA > courseB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "5%",
    },
    {
      title: "Phone",
      dataIndex: "soDt",
      width: "25%",
    },
    {
      title: "Type",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => {
        let GV = a.maLoaiNguoiDung.toLowerCase().trim();
        let HV = b.maLoaiNguoiDung.toLowerCase().trim();
        if (GV > HV) {
          return 1;
        }
        return -1;
      },
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, user) => {
        return (
          <Fragment>
            <span
              key={2}
              className="tooltip bg-white cursor-pointer"
              onClick={() => {
                if (
                  window.confirm("Chắc chắn xóa user " + user.taiKhoan + " ?")
                ) {
                  dispatch(deleteUserAction(user.taiKhoan));
                }
              }}
            >
              <TrashIcon className=" h-7 w-7 text-red-600 hover:scale-125 transition duration-150 origin-center bg-white" />
              <span className="tooltiptext">Delete</span>
            </span>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    dispatch(getUserListAction(value));
  };

  return (
    <Fragment>
      <div className="py-12">
        <div className="max-w-7xl flex flex-row items-center justify-between mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <div className="flex  items-center">
            <span
              className="text-3xl font-semibold text-gray-900"
              style={{ color: "#E96036" }}
            >
              User List
            </span>
            <Button
              className="ml-5"
              onClick={() => {
                history.push("/admin/users/add-new");
              }}
            >
              Add new
            </Button>
          </div>
          <div className="inline-flex  items-center">
            <Search
              placeholder="Enter user name..."
              onSearch={onSearch}
              enterButton="Search"
              size="large"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <div className="py-4">
            <Table
              columns={columns}
              dataSource={userList}
              enterButton={<SearchIcon />}
              onChange={onChange}
              rowKey={"maKhoaHoc"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
