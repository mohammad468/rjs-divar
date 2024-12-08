import api from "src/configs/api";

const getProfile = () => {
  return api.get("user/whoami").then(res => res || false);
};

export { getProfile };
