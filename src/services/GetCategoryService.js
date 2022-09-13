import { baseService } from "./baseService";

export class GetCategoryService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getCategoryService = () =>{
        return this.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
    }
}

export const GetCategoryCourses = new GetCategoryService();