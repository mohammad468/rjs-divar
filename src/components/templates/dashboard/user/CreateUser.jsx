import { useState } from "react";
import TextInput from "./components/TextInput";
import CreateUserBtn from "./components/CreateUserBtn";
import { addUser, getUsers } from "src/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

function CreateUser() {
  const [form, setForm] = useState({ fullName: "", mobile: "" });

  const { mutate, isLoading } = useMutation(addUser, {
    onSuccess: (data) => {
        console.log(data);
      toast.success(`کاربر ${form.fullName} با موفقیت ایجاد شد`);
      setForm({ fullName: "", mobile: "" });
      refetch();
    },
    onError: (error) => {
      toast.error(`خطا: ${error?.response?.data?.message || error?.message}`)
    },
  });
  const { refetch } = useQuery(["users"], getUsers);

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
        <TextInput title="نام و نام خانوادگی" name="fullName" value={form.fullName} onChange={changeHandler} isLoading={isLoading} />
        <TextInput title="شماره موبایل" name="mobile" value={form.mobile} onChange={changeHandler} isLoading={isLoading} />
        <CreateUserBtn isLoading={isLoading} />
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CreateUser;
