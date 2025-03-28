import { RiDeleteBin6Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "src/services/user";

const classBtn = "p-2 text-red-500 bg-red-100 rounded hover:bg-red-200 transition duration-300";

function DeleteBtn({ userId }) {
  const { mutate } = useMutation((id) => deleteUser(id), {
    onSuccess: () => toast.success("حذف با موفقیت انجام شد"),
    onError: () => toast.error("خطا در حذف کاربر"),
  });

  return (
    <button className={classBtn} title="حذف" onClick={() => mutate(userId)}>
      <RiDeleteBin6Line size={20} />
      <Toaster />
    </button>
  );
}

export default DeleteBtn;
