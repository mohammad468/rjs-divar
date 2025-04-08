import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaLocationArrow, FaMoon, FaSun } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "src/components/buttons/AuthBtn";
import DashboardBtn from "src/components/buttons/DashboardBtn";
import LogoutBtn from "src/components/buttons/LogoutBtn";
import RegisterAnAdBtn from "src/components/buttons/RegisterAnAdBtn";
import Location from "src/components/templates/location/Location";
import { logout } from "src/services/auth";
import { getProfile } from "src/services/user";
import { clearCookie } from "src/utils/cookie";

const headerClass =
  "flex justify-between items-center border-b-2 bg-white border-b-gray-200 p-3 mb-5 sticky top-0 z-10";

function Header() {
  const navigate = useNavigate();
  const { data, refetch } = useQuery(["profile"], getProfile);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const submitHandler = async () => {
    const { error } = await logout();
    clearCookie("accessToken");
    if (error) toast.error(`خطا: ${error.message}`);
    if (!error) toast.success("خروج با موفقیت انجام شد");
    const queryClient = useQueryClient();
    queryClient.invalidateQueries({ queryKey: ["profile"] });
    refetch();
    navigate("/");
  };

  return (
    <Navbar fluid className="sticky top-0 z-10 mb-2 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
      <div className="flex items-center">
        <Link to="/">
          <img src="divar.svg" className="w-11 ml-10" />
        </Link>
        <Button
          color={isDarkMode ? "dark" : "light"}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center gap-2 ml-2"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </Button>
        <Location />
      </div>
      <div className="flex items-center gap-x-3">
        <AuthBtn />
        {data?.data?.role === "ADMIN" && <DashboardBtn />}
        <RegisterAnAdBtn />
        <LogoutBtn submitHandler={submitHandler} />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </Navbar>
  );
}

export default Header;
