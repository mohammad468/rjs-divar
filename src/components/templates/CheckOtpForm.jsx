import { checkOtp } from "services/auth";
import { setCookie } from "src/utils/cookie";

function CheckOtpForm({ mobile, code, setCode, setStep, setError }) {

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      setStep(3);
    }
    if (error) setError(error.response.data.message);
    // console.log({ response, error });
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
