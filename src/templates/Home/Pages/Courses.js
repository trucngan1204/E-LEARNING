import React, { Fragment, useEffect } from "react";
import BreadCrumb from "../../../components/Breadcrumbs/Breadcrumbs";
import Lazyload from "react-lazyload";
import { history } from "./../../../App";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  getCateCoursesAction,
  getCoursesAction,
} from "../../../redux/actions/coursesActions";
import "./Style/StyleCourses.css";
import "./../Components/Home/styles/tabCoursesHome.css";

export default function Courses(props) {
  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer
  );

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, []);

  const { TabPane } = Tabs;

  const renderCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      let courseByCate = arrCourses.filter(
        (course) =>
          course.danhMucKhoaHoc?.maDanhMucKhoahoc === cateCourses.maDanhMuc
      );
      return (
        <TabPane tab={cateCourses.tenDanhMuc} key={index}>
          <div className="text-gray-600 body-font mx-5 ">
            <div className="container mb-8 lg:mb-12 sm:mb-0 py-8 sm:py-16 px-3 mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 -m-4">
                {courseByCate.slice(0, 8).map((course, index) => {
                  return (
                    <div
                      key={index}
                      className="courses_tab_home relative mb-3 lg:mb-12 mx-2 sm:mx-5 px-3 sm:px-6 py-5 sm:py-12 bg-white rounded-xl lg:rounded-3xl shadow-xl"
                    >
                      <div className="absolute top-0 left-0"></div>
                      <p className="rounded-md lg:rounded-lg mb-4 text-center text-purple-700 bg-indigo-100 py-2 px-3 w-fit text-xs">
                        {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                      </p>
                      <div className="text-center ">
                        <Lazyload height={200}>
                          <img
                            alt={course?.tenKhoaHoc}
                            className="w-full mb-8 object-cover object-center rounded-lg inline-block"
                            style={{
                              maxHeight: "150px",
                              minHeight: "150px",
                              border: "1px solid #eee",
                            }}
                            src={course?.hinhAnh}
                          />
                        </Lazyload>
                        <h2 className="courses_tab_home_heading  text-lg sm:text-3xl font-bold">
                          {course?.tenKhoaHoc}
                        </h2>
                        <p className="course_tab_home_description text-sm sm:text-lg text-gray-500 leading-relaxed">
                          {course?.moTa?.length > 100 ? (
                            <span>{course?.moTa?.slice(0, 90)}...</span>
                          ) : (
                            <span>{course.moTa}</span>
                          )}
                        </p>
                        <div
                          onClick={() => {
                            history.push(`/courses/detail/${course.maKhoaHoc}`);
                          }}
                          className="mx-auto cursor-pointer w-fit mt-4 ring-1 ring-purple-700 text-purple-700 bg-white hover:text-white hover:bg-purple-700 
                        lg:font-semibold text-sm sm:text-base px-5 py-3 rounded-lg transition-colors"
                        >
                          Chi tiết lớp học
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center">
            <button
              onClick={() => {
                history.push(`/courses/${cateCourses.maDanhMuc}`);
              }}
              className="mb-12 sm:mb-32 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-base p-3 sm:p-5 rounded-lg transition-colors"
            >
              Xem thêm lớp học
            </button>
            </div>
          </div>
        </TabPane>
      );
    });
  };

  return (
    <Fragment>
      <div className="courses--header w-full">
        <div className="container px-5 py-8 lg:py-32">
          <p className="hidden lg:block mb-5">
            <BreadCrumb />
          </p>
          <h1 className="text-2xl lg:text-4xl uppercase">Khoá học</h1>
        </div>
      </div>
      <div className="courses--body mt-14 lg:mt-24">
        <div className="container">
          <Tabs
            centered
            size={"large"}
            type="card"
            tabBarGutter={30}
            animated={false}
          >
            {renderCourses()}
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
}
