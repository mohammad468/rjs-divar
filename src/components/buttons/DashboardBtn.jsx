import React from "react";
import { Link } from "react-router-dom";

const btnClass = "bg-green-800 text-white px-3 py-2 rounded-md text-center";

function DashboardBtn() {
  return (
    <Link to="/dashboard" className={btnClass}>
      داشبورد
    </Link>
  );
}

export default DashboardBtn;
