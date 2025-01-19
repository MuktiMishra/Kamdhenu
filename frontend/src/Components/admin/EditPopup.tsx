import React, { useState } from "react";
import { toast } from "react-toastify";

interface EditPopupProps {
  tabContext: string;
  candidateData: any;
  onClose: () => void;
  onSubmit: (updatedData: any) => void;
}

const EditPopup: React.FC<EditPopupProps> = ({
  tabContext,
  candidateData,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(candidateData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = async () => {
    console.log("We are here")
    console.log(!formData.sector.trim()); 
    console.log(onSubmit)
    switch(tabContext){
      case 'Training': 
        if (!formData.mode || !formData.sector.trim() || !formData.role.trim() || !formData.organization.trim() || !formData.paid || !formData.location.trim()){
          toast.error("fill the data, data is empty")
          return;  
        }
        break; 
    }
    if (!formData.charges) {
      formData.charges = 0; 
    }
    onSubmit(formData);
    onClose();
  };

  const renderFields = () => {
    switch (tabContext) {
      case "Training":
        return (
          <>
            <label>
              <strong>Regular/On-field Training:</strong>
              <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-gray-100"
                    required
                >
                    <option value="">Select</option>
                    <option value="REGULAR">REGULAR</option>
                    <option value="ONSITE">ON-SITE</option>
                </select>
            </label>
            <label>
              <strong>Sector of Training:</strong>
              <input
                type="text"
                name="sector"
                value={formData.sector || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Role:</strong>
              <input
                type="text"
                name="role"
                value={formData.role || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Organization:</strong>
              <input
                type="text"
                name="organization"
                value={formData.organization || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Location:</strong>
              <input
                type="text"
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Paid/Free:</strong>
              <select
                name="paid"
                value={formData.paid || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </label>
            {formData.paid === "Paid" && (
              <label>
                <strong>Charges:</strong>
                <input
                  type="number"
                  name="charges"
                  value={formData.charges || ""}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </label>
            )}
          </>
        );
      case "Placement":
        return (
          <>
            <label>
              <strong>Industry/Field:</strong>
              <input
                type="text"
                name="industry"
                value={formData.industry || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Location:</strong>
              <input
                type="text"
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Expected Salary:</strong>
              <input
                type="number"
                name="salary"
                value={formData.salary || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Company:</strong>
              <input
                type="text"
                name="company"
                value={formData.company || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Profile in the Company:</strong>
              <input
                type="text"
                name="profile"
                value={formData.profile || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
          </>
        );
      case "Education":
        return (
          <>
            <label>
              <strong>Further Qualification:</strong>
              <input
                type="text"
                name="qualification"
                value={formData.qualification || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label>
              <strong>Paid/Free:</strong>
              <select
                name="paid"
                value={formData.paid || ""}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </label>
            {formData.paid === "Paid" && (
              <label>
                <strong>Charges:</strong>
                <input
                  type="number"
                  name="charges"
                  value={formData.charges || ""}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </label>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Candidate Data</h2>
          <button
            onClick={onClose}
            className="text-red-600 px-4 py-2 hover:underline"
          >
            Close
          </button>
        </div>
        <form className="grid gap-4">
          {renderFields()}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
