import { baseService } from "./baseService";

export class EnrollCourseService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    enrollCourseService = () =>{
        return this.get(`/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`);
    }
}

export const enrollCourseService = new EnrollCourseService();