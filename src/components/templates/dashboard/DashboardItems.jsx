import dashboardItems from "src/constants/dashboards";
import DashboardItem from "./DashboardItem";

function DashboardItems({select, setSelect}) {
  return (
    <div className="col-span-4 lg:col-span-3 row-span-2 hidden md:block">
      <div className="bg-gray-100 p-6 rounded-xl h-[calc(100vh_-_120px)] overflow-auto sticky top-[95px]">
        <div className="mb-7">
          {dashboardItems.map((dashboardItem, index) => (
            <DashboardItem
              key={dashboardItem.name}
              title={dashboardItem.title}
              name={dashboardItem.name}
              icon={dashboardItem.icon}
              index={index}
              select={select}
              setSelect={setSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardItems;
