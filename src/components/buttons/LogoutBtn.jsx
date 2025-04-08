import { Button } from "flowbite-react";
import React from "react";
import { HiLogout } from "react-icons/hi";

function LogoutBtn({ submitHandler }) {
  return (
    <Button color="light" onClick={submitHandler}>
      <HiLogout className="ml-2 h-5 w-5" />
      خروج
    </Button>
  );
}

export default LogoutBtn;
