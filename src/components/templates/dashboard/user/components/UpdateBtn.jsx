import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEdit } from "react-icons/ai";

const classBtn = "p-2 text-blue-500 bg-blue-100 rounded hover:bg-blue-200 transition duration-300";

function UpdateBtn() {
  return (
    <button className={classBtn} onClick={() => toast.success("در حال توسعه")} title="ویرایش">
      <AiOutlineEdit size={20} />
      <Toaster />
    </button>
  );
}

export default UpdateBtn;
