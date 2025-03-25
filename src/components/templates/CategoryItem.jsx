import { useEffect, useState } from "react";
import { findByIdCategory } from "src/services/admin";

function CategoryItem({ category }) {
  const { icon, name, slug, parent } = category;
  const [parentData, setParentData] = useState({});

  const fetchParentCategory = async () => {
    const res = await findByIdCategory(parent);
    setParentData(res.response?.data);
  }

  useEffect(() => {
    fetchParentCategory();
  }, []);
  
  return (
    <div className="bg-white rounded-md px-2 py-2">
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-x-5 ps-3">
          <span className="font-extralight">
            آیکون: <b>{icon}</b>
          </span>
          <span className="font-extralight">
            عنوان: <b>{name}</b>
          </span>
          <span className="font-extralight">
            اسلاگ: <b>{slug}</b>
          </span>
          {!!parent && (
            <span className="font-extralight">
              عنوان دسته بندی پرنت: <b>{parentData?.name}</b>  
            </span>
          )}
        </div>
        <div className="flex gap-x-3 pe-3">
          <button>ویرایش</button>
          <button>حذف</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
