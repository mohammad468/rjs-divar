import { sendOtp } from "services/auth";

function SendOtpFrom({ setStep, mobile, setMobile, setError }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    if (mobile && mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) setError(error.response.data.message);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>ورود به حساب کاربری</p>
        <span>
          برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره
          پیامک خواهد شد.
        </span>
        <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
        <input
          type="input"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOtpFrom;
