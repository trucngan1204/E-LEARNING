import { history } from "../../App";
import { userManagermentService } from "../../services/UserManagermentService";
import {GET_USER_LIST, SIGN_IN, SIGN_UP } from "../types/userManagermentType";
import Swal from 'sweetalert2'

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
    return async(dispatch)=>{
      try {
        let result = await userManagermentService.deleteUser(taiKhoan);
      if(result.data.statuscode === 200){
        Swal.fire({
          title: 'Xóa thành công!',
          icon: 'success',
          confirmButtonColor: '#44c020'
        }).then((result)=>{
          if(result.isConfirmed){
            dispatch(getUserListAction())
          }
        })
      }
      } catch (error) {
        console.log('lỗi', error);
            Swal.fire({
                title: 'Xóa thất bại!',
                text: `${error.response?.data}`,
                icon: 'error',
            })
      }
}
}

export const updateUserAction =(capNhat) =>{
  capNhat.maNhom ="GP01";
  return async(dispatch) =>{
    try {
      let result = await userManagermentService.updateUser(capNhat);
      if (result.data.statusCode === 200) {
          Swal.fire({
              title: 'Cập nhật thành công!',
              icon: 'success',
              confirmButtonColor: '#44c020'
          }).then((result) => {
              if (result.isConfirmed) {
                  dispatch(getUserListAction())
              }
          })

      }


    } catch (error) {
        console.log(error.response?.data);
        Swal.fire({
            title: 'Cập nhật thất bại!',
            text: `${error.response?.data}`,
            icon: 'error',
        })
  }
  }
}

export const addUserAction = (thongTinNguoiDung) => {
  thongTinNguoiDung.maNhom ="GP01";
  return async (dispatch) => {
    try {
        let result = await userManagermentService.addUser(thongTinNguoiDung);
        if (result.data.statusCode === 200) {
            Swal.fire({
                title: 'Thêm thành công!',
                icon: 'success',
                confirmButtonColor: '#44c020'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(getUserListAction())
                }
            })

        }



    } catch (errors) {
        console.log(errors.response?.data);
        Swal.fire({
            title: 'Thêm thất bại!',
            text: `${errors.response?.data}`,
            icon: 'error',
        })
    }
}
}

// export const deleteUserAction = (taiKhoan)=>{
//     return async (dispatch) => {
//     try {
//       const result = await userManagermentService.deleteUser(taiKhoan);
//       alert ('Xoá  thành công!')
//       console.log({result})
      
//       dispatch(getUserListAction())
//       window.location.reload();

//     } catch (error) {
//       console.log(error.response);
//     }
//   }
// }