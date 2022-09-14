import { GROUPID } from "../utilities/Settings/config";
import { baseService } from "./baseService";

export class GetCoursesServices extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getCourses = () => {
    return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
  };
  getCoursesAdmin = (tenKhoaHoc) => {
    if (tenKhoaHoc.trim() !== ''){
    return this.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUPID}`
    )}
    return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
  };

  getDetailCourse = (maKhoaHoc) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  };
  getCoursesEachCategory = (maDanhMuc) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUPID}`
    );
  };
  addCourseUploadImg = (formData) => {
    return this.post(`/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, formData);
  };

  capNhatKhoaHoc = (formData)=>{
    return this.put(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,formData);
  }

  updateCourseUpload = (formData) => {
    return this.post(`/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`, formData);
  };

  deleteCourse = (maKhoaHoc) => {
    return this.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
  };
}

export const getCoursesServices = new GetCoursesServices();
