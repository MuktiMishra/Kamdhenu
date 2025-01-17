import React, { useState } from "react";
import Sidebar from "../../Components/admin/Sidebar";
import DataTable from "../../Components/admin/DataTable";

const AdminDashboard: React.FC = () => {
  
  const [activeComponent, setActiveComponent] = useState<number>(1);

  console.log(activeComponent)
  
  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <DataTable tabContext="Education" />; // education
      case 2:
        return <DataTable tabContext="Training" />; // training
      case 3:
        return <DataTable tabContext="Placement" />; // placement
      default:
        return <DataTable tabContext="default" />;
    }
  };

  return (
    <div className="flex">
  
      <Sidebar onItemClick={setActiveComponent} />

      <div className="flex-1 ml-0 md:ml-2 p-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
