import React, { Fragment, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { history } from "../../../../App";
import BreadCrumb from "../../../../components/Breadcrumbs/Breadcrumbs";
import { getCoursesEachCateActions } from "../../../../redux/actions/coursesActions";
import "./../Style/StyleCourses.css";

export default function CourseEachCate(props) {
  const { arrCourseEachCate } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  const [loadMore, setLoadMore] = useState(8);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 8);
  };

  useEffect(() => {
    let { cate } = props.match.params;
    dispatch(getCoursesEachCateActions(cate));
  }, [location.key]);

  const renderCourses = () => {
    return (
      <div className="text-gray-600 body-font flex flex-col items-center">
        <div className="container mb-8 lg:mb-12 sm:mb-0 py-8 sm:py-16 px-3 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:-m-4">
            {arrCourseEachCate?.slice(0, loadMore).map((course, index) => {
              return (
                <div
                  key={index}
                  className="courses-each-cate relative lg:mb-12 mx-2 lg:mx-5 px-6 py-12 bg-white rounded-md lg:rounded-3xl shadow-xl"
                >
                  <div className="absolute top-0 left-0"></div>
                  <p className="rounded-md lg:rounded-lg mb-4 text-center text-purple-700 bg-indigo-100 py-2 px-3 w-fit text-xs">
                    {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                  </p>
                  <div className="text-center">
                    <LazyLoad height={200}>
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
                    </LazyLoad>
                    <h2 className="courses-each-cate-heading text-lg sm:text-3xl font-bold">
                      {course?.tenKhoaHoc}
                    </h2>
                    <p className="courses-each-cate-description text-sm sm:text-lg text-gray-500 leading-relaxed">
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
                      Chi tiết khoá học
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              handleLoadMore();
            }}
            className="mb-14 lg:mb-32 w-fit bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm sm:text-base p-5 rounded-lg transition-colors"
          >
            Xem thêm 
          </button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="courses--header w-full">
        <div className="container px-5 py-8 lg:py-32">
          <p className="hidden lg:block  mb-5">
            <BreadCrumb />
          </p>
          <h1 className="text-2xl lg:text-4xl uppercase w-36 lg:w-full">
            {arrCourseEachCate[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </h1>
        </div>
      </div>

      <div>{renderCourses()}</div>
    </Fragment>
  );
}
