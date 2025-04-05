import React from "react";
import { Link } from "react-router-dom";

const btnClass = "bg-red-800 text-white px-3 py-2 rounded-md text-center";

function RegisterAnAdBtn() {
  return (
    <Link to="/create-ad" className={btnClass}>
      ثبت آگهی
    </Link>
  );
}

export default RegisterAnAdBtn;
