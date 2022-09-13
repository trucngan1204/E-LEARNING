import React, { Fragment } from "react";
import "./../Style/homeStyle.css";
import Lazyload from "react-lazyload";
import CarouselHome from "../Components/Home/CarouselHome";
import TabCoursesHome from "../Components/Home/tabCoursesHome";
import { history } from "../../../App";
import { Link, NavLink } from "react-router-dom";

export default function HomeContent(props) {
  return (
    <Fragment>
      <CarouselHome />
      <div className="container mx-auto py-5 sm:py-16">
        <div className="heading text-center py-10 sm:py-14">
          <h1 className="text-3xl px-10 sm:text-6xl font-bold py-3">
          Đào tạo nghề lập trình chuyên sâu từ ZERO
          </h1>
          <p className="text-base font-normal px-2 sm:px-80">
          CyberSoft khai thác nhu cầu tuyển dụng lập trình, 
          kết nối việc làm tới doanh nghiệp và tích hợp 
          các dự án với công nghệ mới nhất vào phương pháp 
          đào tạo tích cực cho các học viên học xong có việc làm ngay. 
          Chương trình giảng dạy được biên soạn may đo dành riêng 
          cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, 
          luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              history.push("/courses");
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 mt-8 rounded-lg transition-colors"
          >
            Xem các khoá học
          </button>
        </div>
        <div className="img_screenshotlive_home relative mt-20 flex justify-center">
          <img
            className="w-11/12 sm:w-9/12"
            src="./images/students.jpg"
            alt=""
            width="100%"
          />
        </div>
        <div className="heading text-center py-14">
          <h1 className="text-3xl sm:text-6xl font-bold py-3">
            Lộ trình và danh sách các khoá học
          </h1>
          <p className="text-lg font-normal px-2 mb-24 sm:px-80">
                CyberSoft vạch ra lộ trình học lập trình một cách chi tiết, 
                bài bản, chuyên nghiệp, chuẩn nghề ĐH Arizona -USA, 
                100% thực hành theo dự án thực tế tránh lan man, 
                luyện tập tư duy, logic nền tảng chuyên sâu dễ dàng phát triển lên senior, leader. 
                Đi đúng lộ trình CyberSoft bạn sẽ tiết kiệm được thời gian, chi phí và có việc làm tốt nhất và bền vững để thăng tiến.
          </p>
          <div className="py-18">
            <Lazyload>
              <TabCoursesHome />
            </Lazyload>
          </div>
        </div>
        <div
          className="mx-5 sm:mx-0 pt-5 grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 
        place-items-center rounded-3xl bg-gray-100"
        >
          <div className="place-self-auto px-5 sm:px-12">
            <h2 className="text-3xl sm:text-6xl font-semibold leading-tight">
              Học Online tại CyberLearn.vn
              <br />

            </h2>
            <p className="text-base sm:text-xl mb-12 leading-normal">
                Hơn 92% trên hơn 5000 học viên học tại CyberSoft học theo lộ trình và có việc làm tốt. 
                CyberSoft đã triển khai chương trình Học lập trình trực tuyến Online tại CyberLearn 
                để tạo điều kiện cho các bạn không có điều kiện học trực tiếp tại HCM có thể tham gia.
            </p>
            <NavLink
              to="./signup"
              className="mt-5 bg-purple-600 hover:bg-purple-400 hover:text-white  text-white font-semibold text-sm sm:text-base p-4 sm:p-5 rounded-lg transition-colors"
            >
              Đăng ký ngay
            </NavLink>
          </div>
          <div className="img_collegeLevel_home ">
            <Lazyload>
              <img src="./images/online.png" alt="" width="100%" />
            </Lazyload>
          </div>
        </div>
        <div
          className="mt-24 sm:mt-44 mx-5 sm:mx-0 grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-4"
        >
          <div className="img_collegeLevel_home order-2 sm:order-1 mt-10 sm:mt-0">
            <Lazyload>
              <img className="w-11/12 sm:w-11/12" src="./images/img.jpg" alt="" />
            </Lazyload>
          </div>
          <div className="order-1 sm:order-2 px-1 sm:px-12 col-span-1">
            <h2 className="sm:text-6xl text-3xl text-center sm:text-left font-semibold leading-tight">
            Thay đổi sự nghiệp 
              <br />
              - Học lập trình theo lộ trình chuyên biệt tại
              <br />CyberSoft
            </h2>
            <p className="text-lg text-center sm:text-left sm:text-2xl mb-12 sm:leading-10">
            Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, 
            sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình. 
            Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp. Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.
            </p>
            <Link
              to="./contact"
              className="flex mx-auto sm:mx-0 w-fit mt-5 bg-purple-600 hover:bg-purple-700 hover:text-white 
              text-white font-semibold text-sm sm:text-base p-4 sm:p-5 rounded-lg transition-colors"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
