// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getCoursesAction } from "../../../../redux/actions/coursesActions";
// import Lazyload from "react-lazyload";

// export default function ChildTabsCoursesHome(props) {
//   const { arrCourses } = useSelector((state) => state.CoursesReducer);
//   // console.log(arrCourses);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCoursesAction);
//   }, [dispatch]);

//   const renderCourses = () => {
//     return arrCourses.slice(0, 8).map((course, index) => {
//       return (
//         <div
//           key={index}
//           className="courses_tab_home relative lg:mb-12 mx-5 px-6 py-12 bg-white rounded-3xl shadow-xl"
//         >
//           <div className="absolute top-0 left-0"></div>
//           <p className="rounded-md text-center text-purple-700 bg-indigo-100 py-2 px-3 w-fit text-xs">
//             {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
//           </p>
//           <div className="text-center">
//             <Lazyload height={200}>
//               <img
//                 alt="courses-img"
//                 className="w-full mb-8 object-cover object-center rounded-lg inline-block"
//                 style={{ maxHeight: "150px", minHeight: "150px" }}
//                 src={course.hinhAnh}
//               />
//             </Lazyload>
//             <h2 className="courses_tab_home_heading  text-3xl font-bold">
//               {course.tenKhoaHoc}
//             </h2>
//             <p className="course_tab_home_description text-lg text-gray-500 leading-relaxed">
//               {course.moTa.length > 100 ? (
//                 <span>{course.moTa.slice(0, 90)}...</span>
//               ) : (
//                 <span>{course.moTa}</span>
//               )}
//             </p>
//             <button className="w-fit mt-4 border-2 border-purple-700 text-purple-700 bg-white hover:text-white hover:bg-purple-700 font-semibold text-base px-5 py-3 rounded-lg transition-colors">
//               Class Details
//             </button>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container py-16 px-3 mx-auto">
//         <div className="grid grid-rows-2 grid-cols-4 -m-4">
//           {renderCourses()}
//         </div>
//       </div>
//       <button className="mb-32 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 rounded-lg transition-colors">
//         Visit More Classes
//       </button>
//     </section>
//   );
// }
