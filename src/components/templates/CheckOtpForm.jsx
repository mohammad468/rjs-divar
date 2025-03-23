import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { getProfile } from "src/services/user";
import { setCookie } from "src/utils/cookie";

const buttonClasses = "w-full px-2 py-2 mt-5 rounded-lg border border-red-800 transition-all ease-in-out duration-300";

function CheckOtpForm({ mobile, code, setCode, setStep, setError }) {
  const navigate = useNavigate();
  // const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      setStep(3);
      navigate("/");
      // refetch();
    }
    if (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="max-w-lg m-auto flex flex-col justify-center border-2 border-gray-200 rounded-lg p-8 mt-24">
      <p className="text-lg font-bold mb-5">تایید کد پیامک شده</p>
      <span className="text-gray-500 mb-5">کد پیامک شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input type="text" className="form-input mt-0 p-1 border-2 rounded-md border-gray-200 focus:border-gray-400 focus:ring-white" id="input" placeholder="کد تایید" value={code} onChange={(e) => setCode(e.target.value)} />
      <div>
        <button className={`${buttonClasses} md:w-28 bg-red-800 text-white ml-1`} type="submit">ورود</button>
        <button className={`${buttonClasses} md:w-40 text-red-800 bg-white mr-1 hover:bg-red-800 hover:text-white`} onClick={() => setStep(1)}>تغییر شماره موبایل</button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
