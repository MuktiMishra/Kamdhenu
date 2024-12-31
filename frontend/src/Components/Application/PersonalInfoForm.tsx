import React, { useState } from "react";

const PersonalInfoForm = () => {
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
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for email and Aadhar number
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

    // Check if all required fields are filled
    for (const field in formData) {
      if (field !== "alternateMobileNumber" && field !== "termsAccepted" && !formData[field]) {
        alert(`Please fill the ${field} field`);
        return;
      }
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    // Submit the form
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <div className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-blue-600">
        Application Form
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6">
        <div className="hidden lg:block lg:w-1/3">
        <div className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-[#000000]">Start your <span className="text-[#0000ff]">Journey</span> with us</div>
          <img
            className="h-96 rounded-md object-fill"
            src="formimg.png"
            alt="Form Illustration"
          />
        </div>

        <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg rounded-md p-6">
          <div className="text-lg md:text-xl font-bold text-center mb-8 text-blue-600">
            Personal Information
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Form Fields */}
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
          </form>

          <div className="sm:col-span-2 flex items-center m-2">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-5 w-5"
              required
            />
            <label className="ml-2 text-sm font-medium text-gray-700">
              I accept the terms and conditions.
            </label>
          </div>
          
          <div className="sm:col-span-2">
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 ${
                !formData.termsAccepted ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!formData.termsAccepted}
            >
              Submit and Proceed
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;

