import { useState } from "react";
import SidebarData from "./SidebarData"
import { useParams } from "react-router-dom";
import EducationEdit from "./EducationEdit";
import TrainingEdit from "./TrainingEdit";
import PlacementEdit from "./PlacementEdit";
  
 

const EditPopup = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const aadhar = useParams(); 

  const renderComponent = () => {
    console.log(aadhar)
    console.log(activeComponent)
    switch (activeComponent) {
      case 1: 
      return <EducationEdit aadhar={aadhar.aadhar}/>
      case 2: 
      return <TrainingEdit aadhar={aadhar.aadhar}/>
      case 3: 
      return <PlacementEdit aadhar={aadhar.aadhar} />
    }
  }
  
  return (<div className="flex">
      <SidebarData onItemClick={setActiveComponent}/>

      <div className="flex-1 ml-0 md:ml-2 p-4">
        {renderComponent()}
      </div>
      </div>
    )
}

export default EditPopup