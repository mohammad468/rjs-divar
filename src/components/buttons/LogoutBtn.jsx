import React from "react";

const btnClass = "bg-blue-800 text-white px-3 py-2 rounded-md text-center";

function LogoutBtn({ submitHandler }) {
  return (
    <button onClick={submitHandler} className={btnClass}>
      خروج
    </button>
  );
}

export default LogoutBtn;
