import { Button } from "flowbite-react";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function AuthBtn() {
  return (
    <Link to="/me">
      <Button color="light" className="border-none">
        <FaRegUser size={18} />
        <p className="mr-1 text-sm">دیوار من</p>
      </Button>
    </Link>
  );
}

export default AuthBtn;
