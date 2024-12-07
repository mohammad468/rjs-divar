import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { getProfile } from "src/services/user";
import { setCookie } from "src/utils/cookie";

import styles from "./CheckOtpForm.module.css";

function CheckOtpForm({ mobile, code, setCode, setStep, setError }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      setStep(3);
      navigate("/");
      refetch();
    }
    if (error) setError(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
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
      <div>
        <button type="submit">ورود</button>
        <button className={styles.backButton} onClick={() => setStep(1)}>تغییر شماره موبایل</button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
