import { useState } from "react";
import CategoryManagement from "./category/CategoryManagement";
import CreateCategory from "./category/CreateCategory";
import DashboardItems from "./DashboardItems";

function Dashboard() {
  const [select, setSelect] = useState(0);

  return (
    <div className="container mx-auto lg:max-w-screen-2xl grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8">
      <DashboardItems select={select} setSelect={setSelect} />
      <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-gray-100 rounded-xl h-[calc(100vh_-_120px)] overflow-auto sticky top-[95px]">
        {select === 0 && <CategoryManagement />}
        {select === 1 && <CreateCategory />}
      </div>
    </div>
  );
}

export default Dashboard;
