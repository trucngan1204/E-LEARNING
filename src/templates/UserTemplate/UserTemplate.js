import React, { useEffect, useState, Fragment } from "react";
import { Route } from "react-router";
import Navbar from "../Home/Layouts/navbar";
import Footer from "../Home/Layouts/footer";
import SubMenuDropdown from "../Home/Components/Home/subMenuDropdown";
import LogoModal from "../../components/Loading/LogoModal/LogoModal";
import "./../Home/Pages/Style/StylePages.css";

export default function UserTemplate(props) {
  const { Component, ...restProps } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <Navbar toggle={toggle} {...propsRoute} />
            <SubMenuDropdown isOpen={isOpen} toggle={toggle} />

            <Fragment>
              <div className="user-page mb-8">
                <div className="grid grid-flow-col grid-cols-12 justify-center gap-x-8 px-5 pt-5 relative">
                  <div className="col-span-6">
                    <Component {...propsRoute} />
                  </div>
                </div>
              </div>
            </Fragment>
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}
