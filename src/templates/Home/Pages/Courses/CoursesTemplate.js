import { Fragment, useEffect, useState } from "react";
import { Route } from "react-router";
import Footer from "../../Layouts/footer";
import SubMenuDropdown from "../../Components/Home/subMenuDropdown";
import Navbar from "../../Layouts/navbar";

export default function CoursesTemplate (props){
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
            <Component {...propsRoute} />
            <Footer  {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
