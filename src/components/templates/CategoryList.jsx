import { useQuery } from "@tanstack/react-query";
import CategoryItem from "./CategoryItem";
import { findAllCategory } from "src/services/admin";
import { useEffect } from "react";

function CategoryList() {
  const { data, isLoading, error } = useQuery(["findAllCategory"], findAllCategory);

  return (
    <div className="bg-gray-300 rounded-lg w-full p-3 flex flex-col gap-y-2">
      {isLoading && <p>is loading...</p>}
      {!isLoading && data?.data?.map((category) => <CategoryItem key={category._id} category={category} />)  }
    </div>
  );
}

export default CategoryList;
