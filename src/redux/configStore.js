import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import { CoursesReducer } from "./reducers/CoursesReducer";
import { CategoryCoursesReducer } from "./reducers/CategoryCoursesReducer";
import { UserManagermentReducer } from "./reducers/UserManagermentReducer";
import { CoursesAdminReducer } from "./reducers/CoursesAdminReducer";

const rootReducer = combineReducers({
    //state ứng dụng
    CoursesReducer,
    CategoryCoursesReducer,
     UserManagermentReducer,
    CoursesAdminReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

