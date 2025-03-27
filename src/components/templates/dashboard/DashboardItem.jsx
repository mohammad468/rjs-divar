import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";

function DashboardItem({ title, name, select, setSelect, index }) {
  return (
    <Link onClick={() => setSelect(index)} className={`flex items-center gap-2 p-3 ${select === index && "bg-red-800 text-white"} ${select !== index && "bg-gray-300 text-black"} rounded-md cursor-pointer mb-3`}>
      <BsBank />
      <span>{title}</span>
    </Link>
  );
}

export default DashboardItem;
