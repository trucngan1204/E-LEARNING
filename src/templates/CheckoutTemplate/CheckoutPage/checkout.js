import React, { Fragment, useState } from "react";
import "./../Style/CheckoutStyle.css";
import { Collapse } from "antd";
import { Link, NavLink } from "react-router-dom";
import { Radio, Space } from "antd";
import { useSelector } from "react-redux";
import BreadCrumb from "../../../components/Breadcrumbs/Breadcrumbs";
import { Modal} from 'antd';
import Swal from 'sweetalert2'

export default function Checkout(props) {

  const countDown = () =>{
    let secondsToGo = 3;
    const modal = Modal.success({
      title: 'Ghi danh thành công',
      content: `Thông báo tự động tắt sau ${secondsToGo}s.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Thông báo tự động tắt sau ${secondsToGo}s.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }
  const courseDetail = useSelector(
    (state) => state.CoursesReducer.courseDetail
  );

  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const [state, setState] = useState({ value: 1 });

  const radioPayment = (e) => {
    setState({
      value: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="checkout--header w-full">
        <div className="container py-28">
          <p className="mb-5">
            <BreadCrumb />
          </p>
          <h1 className="text-4xl uppercase">Checkout</h1>
        </div>
      </div>
      <div className="checkout--body">
        <div className="container">
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div>
              <div className="payment p-5 my-8 rounded-md flex justify-between items-center">
                <div className="flex-1">
                  <span className="text-xl font-semibold text-indigo-700">
                    Thanh toán
                  </span>
                </div>
              </div>
              <Radio.Group onChange={radioPayment} value={state.value}>
                <Space direction="vertical">
                  <Radio value={1}>
                    <span className="text-xl">Thanh toán trực tiếp</span>
                  </Radio>
                </Space>
              </Radio.Group>
              <textarea
                className="p-5 w-full mt-10"
                placeholder="Note to Administrator"
              ></textarea>
              <NavLink to ="/">
              <button 
                // countDown={countDown}
                className="mt-10 py-5 w-full bg-indigo-500 hover:bg-indigo-700 text-lg rounded-md transition duration-150 text-white">

               Đặt hàng
               
              </button>
              </NavLink>
            </div>
            <div className="relative">
              <div className="your-order p-5 my-8 rounded-md text-center">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Đơn hàng của bạn
                </h4>
              </div>
              <div className="your-order-body border-2 rounded-md p-5">
                <div className="grid grid-flow-col grid-cols-12 gap-2">
                  <div className="col-span-2">
                    <img
                      className="rounded-md"
                      src={courseDetail?.hinhAnh}
                      alt={courseDetail.tenKhoaHoc}
                    />
                  </div>
                  <div className="pl-5 col-span-8 place-self-center justify-self-start text-lg">
                    <Link to={`/courses/detail/${courseDetail.maKhoaHoc}`}>
                      {courseDetail?.tenKhoaHoc?.length > 70 ? (
                        <span>{courseDetail?.tenKhoaHoc?.slice(0, 70)}...</span>
                      ) : (
                        <span>{courseDetail?.tenKhoaHoc}</span>
                      )}
                    </Link>
                  </div>
                  <div className="col-span-2 place-self-center justify-self-end">
                    <span className="text-lg text-gray-500">Miễn phí</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t-2 grid grid-flow-col grid-cols-12 gap-2 place-content-center">
                  <div className="col-span-10  justify-self-start">
                    <h3 className="text-lg text-gray-500">Tổng cộng</h3>
                  </div>
                  <div className="col-span-2 justify-self-end">
                    <span className="text-lg text-gray-500">Miễn phí</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t-2 grid grid-flow-col grid-cols-12 gap-2 place-content-center">
                  <div className="col-span-10  justify-self-start">
                    <h3 className="text-lg text-gray-500">Tổng</h3>
                  </div>
                  <div className="col-span-2 justify-self-end">
                    <span className="text-2xl font-semibold ">Miễn phí</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
