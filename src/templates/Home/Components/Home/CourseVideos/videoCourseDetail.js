// import React, { useState } from "react";
// import "./styleVideoCourseDetail.css";
// import videoData from "../../../../../data/VideoData.json";

// export default function VideoCoursesDetail(props) {
//   const [state, setState] = useState({
//     videoList: videoData[0],
//   });

//   const [activeCourse, setActive] = useState(0);

//   const renderListVideosCourse = () => {
//     return videoData?.map((video, index) => {
//       return (
//         <div
//           key={index}
//           onClick={() => {
//             chooseCourse(video);
//             setActive(index);
//           }}
//           className={` ${
//             activeCourse === index
//               ? "activeCourse video_playlist_course w-full origin-left flex p-2 lg:px-3 lg:py-4"
//               : "video_playlist_course w-full origin-left flex p-2 lg:px-3 lg:py-4"
//           } `}
//         >
//           <img
//             alt=""
//             className="rounded-lg flex-shrink-0 object-cover w-14 h-14 
//             lg:w-20 lg:h-20 mr-4 dark:bg-coolGray-500"
//             src="/images/thumbnailvideo.jpg"
//           />
//           <div className="flex flex-col flex-grow">
//             <h3
//               className="font-body font-semibold text-md lg:text-lg text-black"
//             >
//               {video.title}
//             </h3>
//             <p
//               className="mt-auto text-xs dark:text-coolGray-400"
//               style={{ color: "#E96036" }}
//             >
//               {video.time}
//             </p>
//           </div>
//         </div>
//       );
//     });
//   };

//   const chooseCourse = (videoCourse) => {
//     // console.log(videoCourse);
//     setState({
//       videoList: videoCourse,
//     });
//   };

//   return (
//     <div
//       className="dark:bg-coolGray-800 dark:text-coolGray-100 mt-4 lg:mt-12">
//       <div className="container lg:grid lg:grid-cols-12  gap-2 md:gap-10 mt-6 lg:mx-auto lg:mt-16 p-4  lg:p-10 lg:rounded-2xl bg-gray-100">
//         <div className="relative lg:rounded-2xl bg-gray-100 flex flex-col col-span-12 
//         bg-center bg-no-repeat bg-cover dark:bg-coolGray-500 xl:col-span-8 
//         lg:col-span-7 md:col-span-9 min-h-96">

//           <div className="video-responsive">
          
//             <iframe
//               width="853"
//               height="480"
//               src={`https://www.youtube.com/embed/${state.videoList.videoID}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               title="Cybersoft"
//             />
//           </div>
//         </div>
//         <div className="lg:col-span-4 lg:block">
//           <p className="font-semibold mt-3 lg:mt-0 text-lg lg:text-2xl lg:pl-3 text-gray-500 lg:text-black">
//             Courses playlist
//           </p>
//           <div
//             className="video_playlist pr-8 overflow-y-scroll lg:pb-10 lg:col-span-4 lg:block"
//             style={{ height: 555 }}
//           >
//             <div className=" flex flex-col pl-1">
//               {renderListVideosCourse()}
//             </div>
//           </div>
//         </div>
//         <div className="justify-self-start col-span-8 hidden lg:block">
//           <h2 className=" font-semibold text-2xl" style={{ color: "#7C3AED" }}>
//             {state.videoList.title}
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }
