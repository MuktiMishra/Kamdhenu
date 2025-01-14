import React, { useState } from "react";

interface PersonalInfoFormProps {
  onSubmit: (data: any) => void;
  onPrevious?: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    sevayojanRegNo: "",
    sevayojanRegDate: "",
    aadharNumber: "",
    emailId: "",
    candidateName: "",
    fathersName: "",
    mothersName: "",
    address: "",
    state: "",
    city: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    dob: "",
    gender: "",
    category: "",
    religion: "",
    residentialStatus: "",
    financialStatus: "",
    fathersOccupation: "",
    guardianContactNumber: "",
    termsAccepted: true,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
    const aadharRegex = /^\d{12}$/;

    if (!emailRegex.test(formData.emailId)) {
      alert("Invalid Email ID");
      return;
    }

    if (!aadharRegex.test(formData.aadharNumber)) {
      alert("Aadhar Number must be a 12-digit number");
      return;
    }

    for (const field in formData) {
      if (field !== "alternateMobileNumber" && field !== "termsAccepted") {
        alert(`Please fill the ${field} field`);
        return;
      }
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    onSubmit(formData);
  };

  return (
      <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg rounded-md p-6">
        <div className="text-lg md:text-xl font-bold text-center mb-8 text-blue-600">
          Personal Information
        </div>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sevayojan Reg. No
            </label>
            <input
                type="text"
                name="sevayojanRegNo"
                value={formData.sevayojanRegNo}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sevayojan Reg. Date
            </label>
            <input
                type="date"
                name="sevayojanRegDate"
                value={formData.sevayojanRegDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Aadhar Number
            </label>
            <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Candidate Name
            </label>
            <input
                type="text"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father's Name
            </label>
            <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mother's Name
            </label>
            <input
                type="text"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Financial Status
            </label>
            <select
                name="financialStatus"
                value={formData.financialStatus}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            >
              <option value="">Select</option>
              <option value="APL">APL</option>
              <option value="BPL">BPL</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Residential Status
            </label>
            <select
                name="residentialStatus"
                value={formData.residentialStatus}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            >
              <option value="">Select</option>
              <option value="Rural">Rural</option>
              <option value="Urban">Urban</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father's Occupation
            </label>
            <input
                type="text"
                name="fathersOccupation"
                value={formData.fathersOccupation}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guardian Contact Number
            </label>
            <input
                type="text"
                name="guardianContactNumber"
                value={formData.guardianContactNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                pattern="^[0-9]{10}$"
                title="Enter a valid 10-digit mobile number"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            >
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Religion
            </label>
            <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
            >
              <option value="">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex items-center m-2">
            <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="h-5 w-5"
                required
            />
            <label className="ml-2 text-sm font-medium text-gray-700">
              I accept the terms and conditions.
            </label>
          </div>

          <div className="sm:col-span-2 flex justify-end space-x-4">
            <button
                type="button"
                onClick={() => onSubmit(formData)}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={!formData.termsAccepted}
            >
              Next
            </button>
          </div>
        </form>
      </div>
  );
};

export default PersonalInfoForm;

