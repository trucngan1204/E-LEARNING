// import { history } from "../../App";
// import { userManagermentService } from "../../services/UserManagermentService";
// import {GET_USER_LIST, SIGN_IN, SIGN_UP } from "../types/userManagermentType";
// // import Swal from 'sweetalert2'


// export const signInAction = (thongTinDangNhap) => {;
//     return async (dispatch) => {
//       try {
//           const result = await userManagermentService.signIn(thongTinDangNhap);


//           if (result.data.statusCode === 200) {
//               dispatch({
//                   type: SIGN_IN,
//                   thongTinDangNhap: result.data.content,
//               });
//               // console.log('result',result);
//               history.push('/');
//           }
//           console.log('result',result);
//       } catch (error) {

//         console.log('error',error.response?.data);
//       }

//   }
// }

// export const signUpAction = (thongTinDangKy, countDown) => {
//   return async (dispatch) => {
//     try {
//       const result = await userManagermentService.signUp(thongTinDangKy);
//       console.log({ result });

//       if (result.status === 200) {
//         dispatch({
//           type: SIGN_UP,
//           thongTinDangKy: result.data,
//         });
//         //Redirect to previous page
//         history.goBack();
//         countDown();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getUserListAction = (tuKhoa='') => {
//   return async (dispatch) => {
//     try {
//       const result = await userManagermentService.getUserList(tuKhoa);

//       dispatch({
//         type: GET_USER_LIST,
//         userList: result.data,
//       });
//     } catch (error) {
//       console.log(error.response?.data);
//     }
//   };
// };

// export const deleteUserAction = (taiKhoan)=>{
//   return async (dispatch) => {
//   try {
//     const result = await userManagermentService.deleteUser(taiKhoan);
//     alert ('Xoá user thành công!')
//     console.log({result})
    
//     dispatch(getUserListAction())
//     window.location.reload();

//   } catch (error) {
//     console.log(error.response);
//   }
// }
// }

import { history } from "../../App";
import { userManagermentService } from "../../services/UserManagermentService";
import {GET_USER_LIST, SIGN_IN, SIGN_UP } from "../types/userManagermentType";

export const signInAction = (DangNhap, setShowModal) => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.signIn(DangNhap);
      console.log({ result });

      if (result.status === 200) {
        dispatch({
          type: SIGN_IN,
          thongTinDangNhap: result.data,
        });

        history.goForward();
        // window.location.hash();
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpAction = (DangKy, countDown) => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.signUp(DangKy);
      console.log({ result });

      if (result.status === 200) {
        dispatch({
          type: SIGN_UP,
          thongTinDangKy: result.data,
        });
        //Redirect to previous page
        history.goBack("/signin");
        countDown();
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const getUserListAction = (tuKhoa='') => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.getUserList(tuKhoa);

      dispatch({
        type: GET_USER_LIST,
        userList: result.data,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const deleteUserAction = (taiKhoan)=>{
    return async (dispatch) => {
    try {
      const result = await userManagermentService.deleteUser(taiKhoan);
      alert ('Xoá user thành công!')
      console.log({result})
      
      dispatch(getUserListAction())
      window.location.reload();

    } catch (error) {
      console.log(error.response);
    }
  }
}
// export const timKiemNguoiDungAction = (tuKhoa ='')=>{

//   return async(dispatch)=>{
//       try {
//           const result = await quanLyNguoiDungService.timKiemNguoiDung(tuKhoa);

//           dispatch({
//               type:SET_TIM_KIEM_NGUOI_DUNG,
//               arrUser:result.data.content
//           })
//       }catch(errors){
//           console.log('errors', errors)
//       }
//   };
// }

// export const xoaNguoiDungAction = (taiKhoan) => {


//   return async (dispatch) => {
//       try {

//           let result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
//           // console.log('result',result.data.content);
//           if (result.data.statusCode === 200) {
//               Swal.fire({
//                   title: 'Xóa thành công!',
//                   icon: 'success',
//                   confirmButtonColor: '#44c020'
//               }).then((result) => {
//                   if (result.isConfirmed) {
//                       dispatch(layDanhSachNguoiDungAction())
//                   }
//               })
//           }



//       } catch (errors) {
//           // console.log('errors',errors.response?.data)
//           console.log('lỗi', errors);
//           Swal.fire({
//               title: 'Xóa thất bại!',
//               text: `${errors.response?.data}`,
//               icon: 'error',
//           })

//       }
//   }
// }






// export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



//   return async (dispatch) => {

//       try {
//           const result = await quanLyNguoiDungService.layThongTinNguoiDung();


//           if (result.data.statusCode === 200) {
//               dispatch({
//                   type: SET_THONG_TIN_NGUOI_DUNG,
//                   thongTinNguoiDung: result.data.content
//               });

//           }

//           console.log('result', result);

//       } catch (error) {
//           console.log('error', error.response.data);
//       }

//   }

// }
// export const capNhatNguoiDungAction = (capNhat) => {
//   capNhat.maNhom = "GP01";
//   return async (dispatch) => {
//       try {
//           let result = await quanLyNguoiDungService.capNhatNguoiDung(capNhat);
//           if (result.data.statusCode === 200) {
//               Swal.fire({
//                   title: 'Cập nhật thành công!',
//                   icon: 'success',
//                   confirmButtonColor: '#44c020'
//               }).then((result) => {
//                   if (result.isConfirmed) {
//                       dispatch(layDanhSachNguoiDungAction())
//                   }
//               })

//           }


//       } catch (errors) {
//           console.log(errors.response?.data);
//           Swal.fire({
//               title: 'Cập nhật thất bại!',
//               text: `${errors.response?.data}`,
//               icon: 'error',
//           })
//       }
//   }
// }
// export const themNguoiDungAction = (thongTinNguoiDung) => {
//   thongTinNguoiDung.maNhom = "GP01";
//   return async (dispatch) => {
//       try {
//           let result = await quanLyNguoiDungService.themNguoiDung(thongTinNguoiDung);
//           if (result.data.statusCode === 200) {
//               Swal.fire({
//                   title: 'Thêm thành công!',
//                   icon: 'success',
//                   confirmButtonColor: '#44c020'
//               }).then((result) => {
//                   if (result.isConfirmed) {
//                       dispatch(layDanhSachNguoiDungAction())
//                   }
//               })

//           }



//       } catch (errors) {
//           console.log(errors.response?.data);
//           Swal.fire({
//               title: 'Thêm thất bại!',
//               text: `${errors.response?.data}`,
//               icon: 'error',
//           })
//       }
//   }
// }