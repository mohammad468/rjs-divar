import { Button } from "flowbite-react";
import React from "react";
import { HiDocumentPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

function RegisterAnAdBtn() {
  return (
    <Link to="/create-ad">
      <Button color="lime">
        <HiDocumentPlus className="ml-2 h-5 w-5" />
        ثبت آگهی
      </Button>
    </Link>
  );
}

export default RegisterAnAdBtn;
