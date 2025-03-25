import api from "src/configs/api";

const addCategory = (data) => api.post("category", data);
const findAllCategory = () => api.get("category/all");
const findByIdCategory = async (id) => {
  if (!id) return {};
  try {
    const response = await api.get(`category/${id}`);
    return { response };
  } catch (error) {
    return { error };
  }
};

export { addCategory, findAllCategory, findByIdCategory };
