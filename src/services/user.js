import api from "src/configs/api";

const getProfile = () => {
  return api.get("user/whoami").then((res) => res || false);
};
const getUsers = () => api.get("user");
const deleteUser = (userId) => api.delete(`user/${userId}`);

export { getProfile, getUsers, deleteUser };
