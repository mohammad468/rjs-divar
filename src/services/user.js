import api from "src/configs/api";

const getProfile = () => {
  return api.get("user/whoami");
};

export { getProfile };
