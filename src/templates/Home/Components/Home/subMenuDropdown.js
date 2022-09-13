import React from "react";
import { Link } from "react-router-dom";
import "./../../Layouts/Style/navbar.css";

export default function SubMenuDropdown({ isOpen, toggle }) {

  return (
    <div className="relative">
    <div
      className={isOpen ? "mobile-menu" : "hidden mobile-menu-hide"}
      onClick={toggle}
    >
      <Link to="/">{("Home")}</Link>
      <Link to="/about">{("About")}</Link>
      <Link to="/courses">{("Courses")}</Link>
      <Link to="/contact">{("Contact")}</Link>
      <div className="flex justify-center">
      </div>
    </div>
    </div>
  );
}
