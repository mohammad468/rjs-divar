import { Button } from "flowbite-react";
import React from "react";
import { HiDocumentPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

const btnClass = "bg-red-800 text-white px-3 py-2 rounded-md text-center";

function RegisterAnAdBtn() {
  return (
    <Button color="lime">
      <HiDocumentPlus className="ml-2 h-5 w-5" />
      <Link to="/create-ad">
        ثبت آگهی
      </Link>
    </Button>
  );
}

export default RegisterAnAdBtn;
