import api from "../configs/api";
const sendOtp = async (mobile) => {
  try {
    const response = await api.post("auth/send-otp", { mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (mobile, code) => {
  try {
    const role = "ADMIN";
    const response = await api.post("auth/check-otp", { mobile, code, role });
    return { response };
  } catch (error) {
    return { error };
  }
};

const logout = async () => {
  try {
    const response = await api.get("auth/logout");
    return { response };
  } catch (error) {
    return { error };
  }
};
export { sendOtp, checkOtp, logout };
