import React, { Fragment } from "react";
import "./../../style/StyleAdmin.css";
import { PencilAltIcon, SearchIcon, TrashIcon } from "@heroicons/react/outline";
import { Button, Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCourseAction,
  getCoursesAdminAction,
} from "../../../../redux/actions/coursesAdminActions";
import { Link } from "react-router-dom";
import { history } from "../../../../App";

export default function Courses({ tenKhoaHoc }) {

  const { arrCoursesAdmin } = useSelector((state) => state.CoursesAdminReducer);

  const dispatch = useDispatch();
  
  const { Search } = Input;


  useEffect(() => {
    dispatch(getCoursesAdminAction(tenKhoaHoc));
  }, []);

  const columns = [
    {
      title: "Code",
      dataIndex: "maKhoaHoc",
      sorter: (a, b) => a.maKhoaHoc.length - b.maKhoaHoc.length,
      sortDirections: ["descend"],
      width: "10%",
    },
    {
      title: "Course Name",
      dataIndex: "tenKhoaHoc",
      sorter: (a, b) => {
        let courseA = a.tenKhoaHoc.toLowerCase().trim();
        let courseB = b.tenKhoaHoc.toLowerCase().trim();
        if (courseA > courseB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
      width: "20%",
    },
    {
      title: "Thumbnail",
      dataIndex: "hinhAnh",
      render: (text, courses, index) => {
        return (
          <Fragment>
            <img
              className="rounded-md"
              src={courses.hinhAnh}
              alt={courses.tenKhoaHoc}
              width="100"
              height="100"
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/100/100`;
              }}
            />
          </Fragment>
        );
      },
      width: "5%",
    },
    {
      title: "Description",
      dataIndex: "moTa",
      render: (text, courses) => {
        return (
          <Fragment>
            {courses.moTa.length > 100
              ? courses.moTa.slice(0, 100) + "..."
              : courses.moTa}
          </Fragment>
        );
      },
      width: "25%",
    },
    {
      title: "Category",
      dataIndex: "danhMucKhoaHoc.tenDanhMucKhoaHoc",
      render: (text, courses) => {
        return <Fragment>{courses.danhMucKhoaHoc.tenDanhMucKhoaHoc}</Fragment>;
      },
      sorter: (a, b) => {
        let danhMucA = a.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
        let danhMucB = b.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
        if (danhMucA > danhMucB) {
          return 1;
        }
        return -1;
      },
      width: "15%",
    },
    {
      title: "Instructor",
      dataIndex: "nguoiTao.taiKhoan",
      render: (text, courses) => {
        return <Fragment>{courses.nguoiTao.taiKhoan}</Fragment>;
      },
      sorter: (a, b) => {
        let nguoiTaoA = a.nguoiTao.taiKhoan.toLowerCase().trim();
        let nguoiTaoB = b.nguoiTao.taiKhoan.toLowerCase().trim();
        if (nguoiTaoA > nguoiTaoB) {
          return 1;
        }
        return -1;
      },
      width: "10%",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, courses) => {
        return (
          <Fragment>
            <Link
              key={1}
              to={`/admin/courses/edit/${courses.maKhoaHoc}`}
              className="tooltip bg-white"
            >
              <PencilAltIcon className="mr-3 h-7 w-7 text-blue-500 hover:scale-125 transition duration-150 origin-center bg-white" />
              <span className="tooltiptext">Edit</span>
            </Link>
            <span
              key={2}
              className="tooltip bg-white cursor-pointer"
              onClick={() => {
                if (
                  window.confirm(
                    "Chắc chắn xóa khóa học " + courses.tenKhoaHoc + " ?"
                  )
                ) {
                  dispatch(deleteCourseAction(courses.maKhoaHoc));
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
    console.log('search', value)
    dispatch(getCoursesAdminAction(value));
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
            Courses
          </span>
          <Button
            className="ml-5"
            onClick={() => {
              history.push("/admin/courses/add-new");
            }}
          >
            Add new
          </Button>
          </div>
          <div className="inline-flex  items-center">
            <Search
              placeholder="Enter the course name..."
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
              dataSource={arrCoursesAdmin}
              enterButton={<SearchIcon/>}
              onChange={onChange}
              rowKey={"maKhoaHoc"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
