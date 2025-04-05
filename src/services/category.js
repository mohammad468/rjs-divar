import api from "src/configs/api";

const getCategories = () => api.get("category");

export { getCategories };