import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 border-b-gray-200 px-3 mb-5">
      <div className="flex items-center">
        <Link to="/">
          <img src="divar.svg" className="w-11 ml-10" />
        </Link>
        <span className="flex items-center text-gray-500 h-12">
          <img src="location.svg" />
          <p className="mr-1 text-sm">تهران</p>
        </span>
      </div>
      <div className="flex items-center">
        <Link to="/auth">
          <span className="flex items-center text-gray-500 h-12">
            <img src="profile.svg" />
            <p className="mr-1 text-sm">دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className="bg-red-800 text-white px-3 py-2 rounded-md text-center mr-10">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
