
import {
  UPDATE_COURSE,
  DELETE_COURSE,
  GET_COURSES_ADMIN,
  ADD_NEW_COURSE_ADMIN,
  GET_DETAILS_COURSES,
  CAP_NHAT_KHOA_HOC,
} from "../types/coursesType";

let newCourse = {};
let courseUpdate = {};

const stateDefault = {
  arrCoursesAdmin: [
    {
      maKhoaHoc: "0.14967431092137828",
      biDanh: "php",
      tenKhoaHoc: "PHP",
      moTa: "SMM...",
      luotXem: 100,
      hinhAnh: "https://elearning0706.cybersoft.edu.vn/hinhanh/php_gp01.jpg",
      maNhom: "GP01",
      ngayTao: "20/08/2021",
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: "admin_test",
        hoTen: "seaways",
        maLoaiNguoiDung: "GV",
        tenLoaiNguoiDung: "Giáo vụ",
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: "BackEnd",
        tenDanhMucKhoaHoc: "Lập trình Backend",
      },
    },
  ],
  arrCoursesAddNew: newCourse,
  arrCourseEdit: courseUpdate,
  
  detailCourseEdit: [],
};

export const CoursesAdminReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES_ADMIN: {
      state.arrCoursesAdmin = action.arrCoursesAdmin;
      return { ...state };
    }
    case ADD_NEW_COURSE_ADMIN: {
      let { newCourse } = action;
      return { ...state, newCourse };
    }
    case GET_DETAILS_COURSES: {
      state.detailCourseEdit = action.detailCourseEdit;
      return { ...state };
    }
    case UPDATE_COURSE: {
      let {courseUpdate} = action;
      return { ...state, courseUpdate };
    }
    case CAP_NHAT_KHOA_HOC:{
      let{capNhatKhoaHoc}=action;
      return { ...state, capNhatKhoaHoc };
    }
    case DELETE_COURSE: {
      state.detailCourseEdit = action.detailCourseEdit;
      return { ...state };
    }
    default:
      return { ...state };
  }
};