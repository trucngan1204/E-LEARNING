
import React, { Fragment, useEffect, useState } from "react";
import { Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailsCoursesEditAction,
  updateCourseAction,
  capNhatKhoaHocAction, 
} from "../../../../redux/actions/coursesAdminActions";
import { GROUPID } from "../../../../utilities/Settings/config";

export default function EditCourse(props) {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");

  const { detailCourseEdit } = useSelector(
    (state) => state.CoursesAdminReducer
  );
  //   console.log({detailCourseEdit})
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    dispatch(getDetailsCoursesEditAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: detailCourseEdit?.maKhoaHoc,
      tenKhoaHoc: detailCourseEdit?.tenKhoaHoc,
      tenDanhMucKhoaHoc: detailCourseEdit?.danhMucKhoaHoc?.tenDanhMucKhoaHoc,
      moTa: detailCourseEdit?.moTa,
      hinhAnh: null,
      maNhom: GROUPID,
      ngayTao: "",
    },
    onSubmit: (values) => {
      console.log("values", values);

      let formData = new FormData();

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else if (values.hinhAnh !== null) {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
        else {
          alert('Vui lòng chọn ảnh  cho khóa học')
        }
      }
      console.log({values})

      //Gọi API gửi giá trị FormData về backend
      dispatch(capNhatKhoaHocAction(formData));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeFile = async (e) => {
    //Lấy file ra từ event
    let file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      //Đem dữ liệu lưu vào formik
      await formik.setFieldValue("hinhAnh", file);
      //Tạo đối tượng đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
    }
  };

  return (
    <Fragment>
      <div className="py-12">
        <div className="max-w-7xl flex flex-row items-center mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
        <h3 className="text-4xl">Sửa khoá học</h3>
        </div>
        <div className="max-w-7xl mx-auto xl:px-0 sm:px-6 md:px-8">
          <div
            className="my-6 py-12 shadow-xl bg-white"
            style={{ border: "1px solid #ddd" }}
          >
            <Form
              onSubmitCapture={formik.handleSubmit}
              labelCol={{
                span: 3,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Form.Item label="Tên khóa học">
                <Input
                  name="tenKhoaHoc"
                  value={formik.values.tenKhoaHoc}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <Form.Item label="Danh mục khóa học">
                <Select
                  name="tenDanhMucKhoaHoc"
                  placeholder="Chọn danh mục khóa học"
                  value={formik.values.tenDanhMucKhoaHoc}
                  onChange={(values) =>
                    formik.setFieldValue("tenDanhMucKhoaHoc", values)
                  }
                >
                  <Select.Option value="Lập trình Backend">
                    Lập trình Backend
                  </Select.Option>
                  <Select.Option value="Lập trình Front end">
                    Lập trình Front end
                  </Select.Option>
                  <Select.Option value="Lập trình Full Stack">
                    Lập trình Full Stack
                  </Select.Option>
                  <Select.Option value="Thiết kế Web">
                    Thiết kế Web
                  </Select.Option>
                  <Select.Option value="Lập trình di động">
                    Lập trình di động
                  </Select.Option>
                  <Select.Option value="Tư duy lập trình">
                    Tư duy lập trình
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Mô tả">
                <Input.TextArea
                  name="moTa"
                  value={formik.values.moTa}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <Form.Item label="Hình ảnh">
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  onChange={handleChangeFile}
                />
                <br />
                <div style={{ width: 200, height: "auto" }}>
                  <img
                    src={imgSrc === "" ? detailCourseEdit.hinhAnh : imgSrc}
                    alt=""
                  />
                </div>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 3,
                }}
                label=""
              >
                <button
                  className="py-2 px-8 hover:shadow-xl transition-all duration-150"
                  type="submit"
                  style={{ backgroundColor: "#e96036", color: "#fff" }}
                >
                  Cập nhật
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}