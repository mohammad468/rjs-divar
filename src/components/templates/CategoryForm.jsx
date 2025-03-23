import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { addCategory } from "src/services/admin";

import { HiOutlineExclamationTriangle } from "react-icons/hi2";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const [errorCode, setErrorCode] = useState(0);
  const [errorDescription, setErrorDescription] = useState("");
  const [persianErrorDescription, setPersianErrorDescription] = useState("");

  const { mutate, isLoading, data } = useMutation(addCategory);

  useEffect(() => {
    if(!!data && !!data?.response?.status && data?.response?.status !== 201) {
      setErrorCode(data.response.status);
      setErrorDescription(data.response.data.message);
    }

    if(!!data && !!data.status && data.status === 201) {
      setErrorCode(0);
      setErrorDescription("");
      setPersianErrorDescription("");
    }
  }, [data]);

  useEffect(() => {
    if(errorDescription === "category already exist") setPersianErrorDescription("دسته بندی وارد شده تکراری است.");
    if(errorDescription === "field required is empty") setPersianErrorDescription("همه فیلدها را پر نمایید");
  }, [errorDescription]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) {
      setErrorCode(1001);
      setErrorDescription("field required is empty");
      return;
    }
    mutate(form);
  };
  return (
    <div className="bg-gray-300">
      <form className="inline-block p-3 border-2 border-gray-300 rounded-xl" onChange={changeHandler} onSubmit={submitHandler}>
        <h3 className="text-lg font-bold m-auto mb-8 border-b-2 border-b-red-800 w-fit pb-1">دسته بندی جدید</h3>
        {
          errorCode !== 0 &&
            <p className="bg-red-100 border border-red-300 rounded-md p-2 mb-2 flex gap-x-2 items-center">
              <HiOutlineExclamationTriangle />
              <span>{persianErrorDescription ? persianErrorDescription : errorDescription}</span>
            </p>
        }
        <label className="block text-sm mb-2" htmlFor="name">عنوان دسته بندی</label>
        <input className="form-input rounded-lg w-80 mb-8 disabled:bg-gray-100 disabled:cursor-not-allowed" type="text" name="name" id="name" disabled={isLoading} />
        <label className="block text-sm mb-2" htmlFor="slug">اسلاگ</label>
        <input className="form-input rounded-lg w-80 mb-8 disabled:bg-gray-100 disabled:cursor-not-allowed" type="text" name="slug" id="slug" disabled={isLoading} />
        <label className="block text-sm mb-2" htmlFor="icon">آیکون</label>
        <input className="form-input rounded-lg w-80 mb-8 disabled:bg-gray-100 disabled:cursor-not-allowed" type="text" name="icon" id="icon" disabled={isLoading} />
        { !isLoading ? <button className="block w-80 px-2 py-2 bg-red-800 text-white rounded-lg" type="submit">ثبت</button> : <button className="block w-80 px-2 py-2 bg-red-400 text-white rounded-lg" disabled>در حال ارسال...</button> }
      </form>
    </div>
  );
}

export default CategoryForm;
