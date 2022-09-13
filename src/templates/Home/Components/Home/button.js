import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="sign-up">
      <button className="px-3 py-1 lg:text-base bg-purple-500 hover:bg-purple-700">Đăng ký</button>
    </Link>
  );
}
