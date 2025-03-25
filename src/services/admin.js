import api from "src/configs/api";

const addCategory = (data) => api.post("category", data);
const findAllCategory = () => api.get("category/all");
const findByIdCategory = (id) => api.get(`category/${id}`);
const deleteCategory = (id) => api.delete(`category/${id}`);

export { addCategory, findAllCategory, findByIdCategory, deleteCategory };
