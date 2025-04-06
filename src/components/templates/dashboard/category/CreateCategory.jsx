import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addCategory, findAllCategory } from "src/services/admin";

// components
import CreateCategoryBtn from "./CreateCategoryBtn";
import TextInput from "./components/TextInput";
import Combo from "./components/Combo";

function CreateCategory() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "", parent: "" });

  const { mutate, isLoading } = useMutation(addCategory, {
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      setForm({ name: "", slug: "", icon: "", parent: "" });
      refetch();
    },
    onError: (error) => {
      toast.error(`خطا: ${error?.response?.data?.message || error?.message}`)
    },
  });
  const { refetch } = useQuery(["findAllCategory"], findAllCategory);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    mutate(form);
  };
  
  return (
    <div className="rounded-lg flex justify-center items-center h-full w-full">
      <form className="inline-block p-5 rounded-xl bg-gray-300" onSubmit={submitHandler}>
        <h3 className="text-lg font-bold m-auto mb-8 border-b-2 border-b-red-800 w-fit pb-1">دسته بندی جدید</h3>
        <TextInput title="عنوان دسته بندی" name="name" value={form.name} onChange={changeHandler} isLoading={isLoading} />
        <TextInput title="اسلاگ" name="slug" value={form.slug} onChange={changeHandler} isLoading={isLoading} />
        <TextInput title="آیکون" name="icon" value={form.icon} onChange={changeHandler} isLoading={isLoading} />
        <TextInput title="شناسه دسته بندی والد" name="parent" value={form.parent} onChange={changeHandler} isLoading={isLoading} />
        <CreateCategoryBtn isLoading={isLoading} />
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CreateCategory;
