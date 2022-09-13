// import { TOKEN, USER_SIGNIN } from "../../utilities/Settings/config";
// import { DELETE_USER, GET_USER_LIST, SIGN_IN, SIGN_UP } from "../types/userManagermentType";

// let user = {};
// let newUser = {};

// if (localStorage.getItem(USER_SIGNIN)) {
//   user = JSON.parse(localStorage.getItem(USER_SIGNIN));
// }

// const stateDefault = {
//   arrUser:[
//     {
//       "taiKhoan" : "adminHuy",
//       "hoTen" : "Do ANh Huy",
//       "email" : "doanhhuy16106666@gmail.com",
//       "soDt" :  "033333333",
//       "matKhau": "123123",
//       "maLoaiNguoiDung": "GV",
//       "tenLoaiNguoiDung": "Giáo vụ"
//     },
//     {
//       "taiKhoan": "anh123",
//       "hoTen": "lê quang anh",
//       "email": "anh11232fdfsa3@gmail.com",
//       "soDt": "081614269",
//       "matKhau": "12345678123fsd",
//       "maLoaiNguoiDung": "GV",
//       "tenLoaiNguoiDung": "Giáo vụ"
//     }

//   ],

//   userList: [],
//   userSignIn: user,
//   userSignUp: newUser,
//   detailUserEdit:[],
//   arrUserDefault:[],
   
//   };

// export const UserManagermentReducer = (state = stateDefault, action) => {
//   switch (action.type) {

//     case SIGN_IN: {
//       const { thongTinDangNhap } = action;
//       localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDangNhap));
//       localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
//       return { ...state, userSignIn:thongTinDangNhap };
//     }

//     case SIGN_UP: {
//       const { thongTinDangKy } = action;
//       localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDangKy));
//       localStorage.setItem(TOKEN, thongTinDangKy.accessToken);
//       return { ...state };
//     }

//     case GET_USER_LIST: {
//       state.arrUser = action.userUser;
//       state.arrUserDefault = state.arrUser;
//       return { ...state };
//     }
//     case DELETE_USER:{
//       state.detailUserEdit = action.detailUserEdit;
//       return { ...state };
//     }

//     default:
//       return { ...state };
//   }
// };
import { TOKEN, USER_SIGNIN } from "../../utilities/Settings/config";
import { DELETE_USER, GET_USER_LIST, SIGN_IN, SIGN_UP } from "../types/userManagermentType";

let user = {};
let newUser = {};

if (localStorage.getItem(USER_SIGNIN)) {
  user = JSON.parse(localStorage.getItem(USER_SIGNIN));
}

const stateDefault = {
  userList: [],
  userSignIn: user,
  userSignUp: newUser,
  detailUserEdit:[],
};

export const UserManagermentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userSignIn: thongTinDangNhap };
    }
    case SIGN_UP: {
      const { thongTinDangKy } = action;
      localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDangKy));
      localStorage.setItem(TOKEN, thongTinDangKy.accessToken);
      return { ...state };
    }
    case GET_USER_LIST: {
      state.userList = action.userList;
      return { ...state };
    }
    case DELETE_USER:{
      state.detailUserEdit = action.detailUserEdit;
      return { ...state };
    }

    default:
      return { ...state };
  }
};