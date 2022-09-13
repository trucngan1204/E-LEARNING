import { GROUPID } from "../utilities/Settings/config";
import { baseService } from "./baseService";

export class UserManagermentService extends baseService {
  constructor() {
    super();
  }

  signIn = (thongTinDangNhap) => {
    //taiKhoan:'', matKhau:''
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  signUp = (thongTinDangKy) => {
    //taiKhoan:'', matKhau:''
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };
  getUserList = (tuKhoa) => {
    if (tuKhoa.trim() !== "") {
      return this.get(
          `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`
          );
        }
        return this.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  getDetailUser = () => {
    return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
  };

  deleteUser = (taiKhoan)=>{
      return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)
  }

  addUser = (formData) =>{
    return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,formData);
  }

  updateUser = (formData) => {
    return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,formData);
}

}

export const userManagermentService = new UserManagermentService();