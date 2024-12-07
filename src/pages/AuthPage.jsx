import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CheckOtpForm from "../components/templates/CheckOtpForm";
import SendOtpFrom from "../components/templates/SendOtpFrom";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) toast.error(`خطا: ${error}`);
  }, [error]);

  useEffect(() => {
    if(step === 2) toast.success("کد تایید به موبایل شما ارسال شد");
    if(step === 3) toast.success("ورود با موفقیت انجام شد");
  }, [step]);

  return (
    <div>
      {step === 1 && (
        <SendOtpFrom setStep={setStep} mobile={mobile} setMobile={setMobile} setError={setError} />
      )}
      {step === 2 && (
        <CheckOtpForm
          mobile={mobile}
          code={code}
          setCode={setCode}
          setStep={setStep}
          setError={setError}
        />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default AuthPage;
