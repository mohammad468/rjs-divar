import React, { useEffect, useState } from "react";
import CategoryItem from "./components/CategoryItem";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "src/services/category";

function Category({ active, setActive }) {
  const { data } = useQuery(["categories"], getCategories);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data?.data.length > 0) {
      const updatedCategories = data.data
        .map((cat) => ({
          ...cat,
          order: cat.slug === "/" ? 0 : 1,
        }))
        .sort((a, b) => a.order - b.order);

      setCategories(updatedCategories);
    }
  }, [data]);

  return (
    <div className="bg-white border overflow-auto rounded-lg h-[calc(100vh_-_120px)] col-span-3">
      {categories.map((cat) => (
        <CategoryItem
          name={cat.name}
          slug={cat.slug}
          icon={cat.icon}
          children={cat.children}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
}

export default Category;
