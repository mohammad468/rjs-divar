import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCategory, findAllCategory, findByIdCategory } from "src/services/admin";

import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function CategoryItem({ category }) {
  // props
  const { icon, name, slug, parent, _id } = category;

  // other hooks
  const { mutate: deleteMutate, data: deleteData , isLoading: deleteIsLoading } = useMutation((id) => deleteCategory(id), {
    onSuccess: () => {
      refetch();
      toast.success("حذف با موفقیت انجام شد");
    },
    onError: () => {
      toast.error("خطا در حذف، لطفا مجددا تلاش نمایید");
    },
  });

  const { data: getParentData, isLoading: getParentIsLoading, error: getParentError } = useQuery(["getParentCategory", parent], () => findByIdCategory(parent), {enabled: !!parent});
  const { refetch } = useQuery(["findAllCategory"], findAllCategory);

  const deleteCategoryHandler = () => {
    deleteMutate(_id);
  };

  return (
    <div className="bg-white rounded-md px-2 py-2">
      <div className="flex justify-between items-center">
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
              عنوان دسته بندی پرنت: <b>{getParentData?.data?.name}</b>
            </span>
          )}
        </div>
        <div className="flex gap-x-3 pe-3">
          <button className="p-2 text-blue-500 bg-blue-100 rounded hover:bg-blue-200 transition duration-300" title="ویرایش">
            <AiOutlineEdit size={20} />
          </button>
          <button onClick={deleteCategoryHandler} className="p-2 text-red-500 bg-red-100 rounded hover:bg-red-200 transition duration-300" title="حذف">
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default CategoryItem;