import { GET_CATEGORY_COURSES} from "../types/coursesType";

const stateDefault = {
  arrCateCourse: [
    {
        maDanhMuc: "BackEnd",
        tenDanhMuc: "Lập trình Backend"
    },
  ]
};

export const CategoryCoursesReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_CATEGORY_COURSES: {
      state.arrCateCourse = action.arrCateCourse;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
