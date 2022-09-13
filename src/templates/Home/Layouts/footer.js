import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import "./Style/footer.css";
import { getCateCoursesAction } from "../../../redux/actions/coursesActions";
import { Link } from "react-router-dom";

export default function Footer() {
  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
  }, []);

  const renderCateCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      return (
        <li key={index}>
          <Link className="text-base sm:text-lg" to={`/courses/${cateCourses.maDanhMuc}`}>{cateCourses.tenDanhMuc}</Link>
        </li>
      );
    });
  };

  return (
    <Fragment>
      {/* <div className="container">
        <LazyLoad>
          <div
            className="py-10 sm:py-16 px-5 mt-10 sm:mt-0 sm:px-0 mb-12 sm:mb-24 mx-5 sm:mx-0 flex justify-center rounded-3xl"
            style={{
              backgroundImage: 'url("/images/bgNewsletter.png")',
              backgroundPosition: "center center",
              backgroundSize: "1400px auto",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#0A033C",
            }}
          >
            <div className="text-center">
              <h2 className="text-xl sm:text-5xl text-white font-semibold leading-tight">
                Subscribe For Get Update
                <br />
                Every New Courses
              </h2>
              <p className="text-sm sm:text-xl text-gray-400 leading-normal">
                20k+ students daily learn with Cybersoft. Subscribe for new courses.
              </p>
              <form>
              <div className="mt-7 sm:mt-24 flex flex-row">
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-3/5 px-3 py-2 lg:p-3 rounded-l-lg sm:w-2/3"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 rounded-r-lg transition-colors
                w-2/5 sm:w-1/3 dark:bg-violet-400 dark:text-coolGray-900"
                >
                  Subscribe
                </button>
              </div>
              </form>
            </div>
          </div>
        </LazyLoad>
      </div> */}
      <footer className="px-4 divide-y dark:bg-coolGray-800 dark:text-coolGray-100 ">
        <div className="footer container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              href="/"
              className="flex  justify-start sm:justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-start sm:justify-center rounded-full dark:bg-violet-400">
                <img className="w-3/4 sm:w-4/5"src="/images/logo.png" alt="E - LEARNING"/>
                {/* <h1 style={{fontSize:30}}>E - LEARNING</h1> */}
              </div>
            </a>
          </div>
          <div className="footer_links grid grid-cols-2 text-lg gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="footer_links_course space-y-3">
              <h3 className="font-bold text-lg sm:text-2xl tracking-wide uppercase dark:text-coolGray-50">
                Khoá học
              </h3>
              <ul className="space-y-1">
                {renderCateCourses()}
              </ul>
            </div>
            <div className="footer_links_community space-y-3">
              <h3 className="font-bold  text-lg sm:text-2xl tracking-wide uppercase dark:text-coolGray-50">
                Community
              </h3>
              <ul className="space-y-1 text-base sm:text-lg">
                <li>
                  <a href="#~">Learners</a>
                </li>
                <li>
                  <a href="#~">Parteners</a>
                </li>
                <li>
                  <a href="#~">Developers</a>
                </li>
                <li>
                  <a href="#~">Transactions</a>
                </li>
                <li>
                  <a href="#~">Blog</a>
                </li>
                <li>
                  <a href="#~">Teaching Center</a>
                </li>
              </ul>
            </div>
            <div className="footer_links_quick space-y-3">
              <h3 className="font-bold  text-lg sm:text-2xl uppercase dark:text-coolGray-50">
                Quick links
              </h3>
              <ul className="space-y-1 text-base sm:text-lg">
                <li>
                  <a href="#~">Professional Education</a>
                </li>
                <li>
                  <a href="#~">Courses</a>
                </li>
                <li>
                  <a href="#~">Admissions</a>
                </li>
                <li>
                  <a href="#~">Testimonial</a>
                </li>
                <li>
                  <a href="#~">Programs</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-bold  text-lg sm:text-2xl uppercase dark:text-coolGray-50">
                Mạng xã hội
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href="https://www.facebook.com/truc.ngan.00"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/tnagn__/"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/trucngan1204"
                  title="Github"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                </a>
                {/* <a
                  href="https://www.behance.net/royalthai"
                  title="Behance"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.228 15.01h-2.228v-2.01h2.261c1.878 0 2.003 2.01-.033 2.01zm6.758-2.677h3.018c-.117-1.715-2.73-1.977-3.018 0zm-6.804-3.333h-2.182v2h2.389c1.673 0 1.937-2-.207-2zm15.818-4v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-10 3h5v-1h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604h-4.635v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.528-2.95-3.583-2.95-2.094 0-3.352 1.34-3.352 3.947 0 2.631 1.367 3.783 3.416 3.783s3.106-1.135 3.4-2h-2.111c-.736.855-2.893.521-2.767-1.353h5.06c.01-.634-.012-1.089-.063-1.427z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright py-6 text-sm text-center dark:text-coolGray-400">
          © 2022 FE71 -
          <a href="#"> Trúc Ngân Neeee</a>
        </div>
      </footer>
    </Fragment>
  );
}
