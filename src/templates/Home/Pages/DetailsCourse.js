import React, { Fragment, useEffect } from "react";
import "./../Components/Home/styles/tabCoursesHome.css";
import LazyLoad from "react-lazyload";
import { history } from "../../../App";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RatingsDetailsCourse from "../Components/Home/Ratings/ratingsDetailsCourse";
import {
  getCoursesAction,
  getDetailsCoursesAction,
  getCateCoursesAction,
} from "../../../redux/actions/coursesActions";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

export default function DetailsCourse(props) {
  const { courseDetail } = useSelector((state) => state.CoursesReducer);

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let { id } = props.match.params;
    //get detail url
    dispatch(getDetailsCoursesAction(id));
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, [location.key]);

  const renderSimilarCourse = () => {
    let similarCourses = arrCourses.filter(
      (course) =>
        course.danhMucKhoaHoc?.maDanhMucKhoahoc ===
        courseDetail.danhMucKhoaHoc?.maDanhMucKhoahoc
    );

    return similarCourses
      ?.filter((course) => course.tenKhoaHoc !== courseDetail.tenKhoaHoc)
      .slice(0, 8)
      .map((course, index) => {
        return (
          <div
            key={index}
            className="courses_tab_home relative lg:mb-12 mx-5 px-3 lg:px-6 py-6 lg:py-12 bg-white rounded-3xl shadow-xl"
          >
            <div className="absolute top-0 left-0"></div>
            <p className="rounded-lg mb-8 text-center text-purple-700 bg-indigo-100 py-2 px-3 w-fit text-xs">
              {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </p>
            <div className="text-center">
              <LazyLoad height={200}>
                <img
                  alt={course?.tenKhoaHoc}
                  className="w-full mb-8 object-cover object-center rounded-lg inline-block "
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    border: "1px solid #eee",
                  }}
                  src={course?.hinhAnh}
                />
              </LazyLoad>
              <h2 className="courses_tab_home_heading text-xl lg:text-3xl font-bold">
                {course?.tenKhoaHoc}
              </h2>
              <p className="course_tab_home_description text-md lg:text-lg text-gray-500 leading-relaxed">
                {course?.moTa?.length > 100 ? (
                  <span>{course?.moTa?.slice(0, 90)}...</span>
                ) : (
                  <span>{course.luotXem}</span>
                )}
              </p>
              <button
                onClick={() => {
                  history.push(`/courses/detail/${course.maKhoaHoc}`);
                }}
                className="mx-auto cursor-pointer w-fit mt-4 ring-1 ring-purple-700 text-purple-700 bg-white
                 hover:text-white hover:bg-purple-700 lg:font-semibold text-md lg:text-base px-5 py-3 rounded-lg transition-colors"
              >
                Chi tiết lớp học
              </button>
            </div>
          </div>
        );
      });
  };

  return (
    <Fragment>
      <div className="container mt-4 lg:mt-40 overflow-hidden">
        <div className="text-center flex flex-col items-center">
          <p className="mb-12">
            <Breadcrumbs />
          </p>
          <p
            className=" bg-indigo-100 rounded-md py-2 px-3 w-fit text-sm lg:text-lg"
            style={{ color: "#7C3AED" }}
          >
            {courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold mt-0 lg:mt-6">
            {courseDetail.tenKhoaHoc}
          </h1>
          <img src={courseDetail?.hinhAnh} />
        </div>
        {/* <VideoCoursesDetail /> */}
        
        <div className=" mx-3 mt-8 lg:mt-24 grid lg:grid-flow-col lg:grid-cols-12 gap-4">
          <div className="img_collegeLevel_home col-span-12 lg:col-span-9">
            <h2 className="font-body text-2xl lg:text-5xl mb-3 lg:mb-10 font-bold leading-tight">
              Chi tiết khoá học
            </h2>
            <p className="text-md lg:text-xl lg:pr-12 text-justify">
              {courseDetail.moTa}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 grid grid-flow-row row-span-2 sticky top-10 bg-white shadow-xl rounded-lg p-5">
            <div className="grid grid-flow-col grid-cols-6 grid-rows-9">
              <div className="text-md lg:text-lg lg:font-semibold text-gray-500 col-span-3 flex flex-col lg:gap-4 items-start justify-between">
                <p>Giá</p>
                <p>Giảng viên</p>
                <p>Đánh giá</p>
                <p>Lượt xem</p>
                <p>Chứng chỉ</p>
                <p>Số lượng học viên</p>
              </div>
              <div className="text-md lg:text-lg lg:font-semibold  text-black col-span-3 lg:gap-4 text-right flex flex-col items-end justify-between">
                <p className=" text-red-500">Miễn phí</p>
                <p className="text-black underline">
                  {courseDetail?.nguoiTao?.hoTen}
                </p>
                <div className="block"
                //  style={{padding: "5px 0 15px 0"}}
                >
                  <RatingsDetailsCourse />
                </div>
                <p>{courseDetail.luotXem}</p>
                <p>Có</p>
                <p>{courseDetail.soLuongHocVien}</p>
              </div>
            </div>
            <NavLink
              to={`/checkout/${courseDetail.maKhoaHoc}`}
              className="text-white hover:text-white font-semibold text-base"
            >
              <div className="lg:mt-5 text-md lg:text-base w-full text-center bg-purple-600 hover:bg-purple-700 p-3 lg:p-5 rounded-lg transition-colors">
                Ghi danh
              </div>
            </NavLink>
          </div>
        </div>
        <div className="related-course mx-3">
          <h2 className="text-2xl lg:text-5xl mt-14 mb-10 font-bold leading-tight">
            Các khoá học liên quan
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 -m-4">{renderSimilarCourse()}</div>
        </div>
      </div>
    </Fragment>
  );
}
