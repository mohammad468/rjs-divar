import { HiChartPie, HiDocumentPlus, HiDocumentText, HiMiniSquares2X2, HiMiniSquaresPlus, HiMiniUserPlus, HiMiniUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

function DashboardItem({ title, name, icon, select, setSelect, index }) {
  return (
    <Link onClick={() => setSelect(index)} className={`flex items-center gap-2 p-3 ${select === index && "bg-red-800 text-white"} ${select !== index && "bg-gray-300 text-black"} rounded-md cursor-pointer mb-3`}>
      {icon === "HiMiniSquares2X2" && <HiMiniSquares2X2 size={25} />}
      {icon === "HiMiniSquaresPlus" && <HiMiniSquaresPlus size={25} />}
      {icon === "HiMiniUsers" && <HiMiniUsers size={25} />}
      {icon === "HiMiniUserPlus" && <HiMiniUserPlus size={25} />}
      {icon === "HiDocumentText" && <HiDocumentText size={25} />}
      {icon === "HiDocumentPlus" && <HiDocumentPlus size={25} />}
      {icon === "HiChartPie" && <HiChartPie size={25} />}
      <span>{title}</span>
    </Link>
  );
}

export default DashboardItem;
