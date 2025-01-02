import React, { useState } from "react";
import Sidebar from "../../Components/admin/Sidebar";
import DataTable from "../../Components/admin/DataTable";
import Placement from "../../Components/admin/Placement";

const AdminDashboard: React.FC = () => {
  
  const [activeComponent, setActiveComponent] = useState<number>(1);

  
  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <DataTable />;
      case 2:
        return <DataTable />;
      case 3:
        return <Placement />;
      default:
        return <DataTable/>;
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
