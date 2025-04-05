import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "src/components/buttons/AuthBtn";
import DashboardBtn from "src/components/buttons/DashboardBtn";
import LogoutBtn from "src/components/buttons/LogoutBtn";
import RegisterAnAdBtn from "src/components/buttons/RegisterAnAdBtn";
import { logout } from "src/services/auth";
import { getProfile } from "src/services/user";
import { clearCookie } from "src/utils/cookie";

const headerClass =
  "flex justify-between items-center border-b-2 bg-white border-b-gray-200 p-3 mb-5 sticky top-0 z-10";

function Header() {
  const navigate = useNavigate();
  const { data } = useQuery(["profile"], getProfile);

  const submitHandler = async () => {
    const { response, error } = await logout();
    clearCookie("accessToken");
    if (error) toast.error(`خطا: ${error.message}`);
    if (response) toast.success("خروج با موفقیت انجام شد");
    navigate("/");
  };

  return (
    <header className={headerClass}>
      <div className="flex items-center">
        <Link to="/">
          <img src="divar.svg" className="w-11 ml-10" />
        </Link>
        <span className="flex items-center text-gray-500 h-12">
          <img src="location.svg" />
          <p className="mr-1 text-sm">تهران</p>
        </span>
      </div>
      <div className="flex items-center gap-x-3">
        <AuthBtn />
        {data?.data?.role === "ADMIN" && <DashboardBtn />}
        <RegisterAnAdBtn />
        <LogoutBtn submitHandler={submitHandler} />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
}

export default Header;
