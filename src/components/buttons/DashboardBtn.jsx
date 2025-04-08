import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineViewGridAdd } from "react-icons/hi";

function DashboardBtn() {
  return (
    <Link to="/dashboard">
      <Button color="light" className="border-none">
        <HiOutlineViewGridAdd className="ml-2 h-5 w-5" />
        داشبورد
      </Button>
    </Link>
  );
}

export default DashboardBtn;
