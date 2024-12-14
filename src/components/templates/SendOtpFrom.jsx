import { useEffect, useState } from "react";
import { sendOtp } from "services/auth";

const description =
  "برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. تایید به این شماره پیامک خواهد شد.";

function SendOtpFrom({ setStep, mobile, setMobile, setError }) {
  const [isLoading, setIsLoading] = useState(false);
  const [validNumber, setValidNumber] = useState(true);
  const [invalidDescription, setInvalidDescription] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (mobile && mobile.length !== 11) {
      setValidNumber(false);
      setInvalidDescription("شماره موبایل نامعتبر میباشد");
      return;
    }
    if(mobile && mobile.length === 11) {
      setValidNumber(true);
      setInvalidDescription("");
    }
    setValidNumber(true);
    setIsLoading(true);
    const { response, error } = await sendOtp(mobile);
    setIsLoading(false);
    if (response) setStep(2);
    if (error) setError(error.response.data.message);
  };

  useEffect(() => {
    if(mobile && mobile.length === 11) {
      setValidNumber(true);
      setInvalidDescription("");
    }
  }, [mobile]);

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="max-w-lg m-auto flex flex-col justify-center border-2 border-gray-200 rounded-lg p-8 mt-24"
      >
        <p className="text-lg font-bold mb-5">ورود به حساب کاربری</p>
        <span className="text-gray-500 mb-5">{description}</span>
        <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
        <input
          type="input"
          className="form-input mt-0 p-1 border-2 rounded-md border-gray-200 focus:border-gray-400 focus:ring-white"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!validNumber && <span className="text-red-600 text-sm font-extralight">{invalidDescription}</span>}
        {isLoading ? (
          <button className="w-32 px-2 py-2 mt-5 bg-red-400 text-white rounded-lg" disabled>
            در حال ارسال...
          </button>
        ) : (
          <button className="w-28 px-2 py-2 mt-5 bg-red-800 text-white rounded-lg" type="submit">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOtpFrom;
