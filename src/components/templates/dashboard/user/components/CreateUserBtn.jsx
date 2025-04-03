function CreateUserBtn({ isLoading }) {
  return (
    <button className={`block w-80 px-2 py-2 bg-red-${isLoading ? "400" : "800"} text-white rounded-lg`} type={`${!isLoading && "submit"}`} disabled={isLoading}>
      ثبت
    </button>
  );
}

export default CreateUserBtn;
