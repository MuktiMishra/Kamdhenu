import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  support: string;
  supportType: string;
  course: string;
  duration: string;
  instituteFees: string;
  trainingSector: string;
  location: string;
  mode: string;
  role: string;
  salary: string;
}

const SupportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    support: "",
    supportType: "",
    course: "",
    duration: "",
    instituteFees: "",
    trainingSector: "",
    location: "",
    mode: "",
    role: "",
    salary: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation for numeric fields (institute fees, salary)
    if (isNaN(Number(formData.instituteFees)) || isNaN(Number(formData.salary))) {
      alert("Please enter valid numeric values for institute fees and salary");
      return;
    }

    // Check if all required fields are filled
    for (const field in formData) {
      if (!formData[field as keyof FormData]) {
        alert(`Please fill the ${field} field`);
        return;
      }
    }

    // Submit the form
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <div className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-blue-600">
        Support Details Form
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6">
        <div className="hidden lg:block lg:w-1/3">
          <div className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-[#000000] p-5">
            Tell what <span className="text-[#0000ff]">Support</span> you need
          </div>
          <img
            className="h-60 rounded-md"
            src="supportForm.png"
            alt="Form Illustration"
          />
        </div>

        <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg rounded-md p-6">
          <div className="text-lg md:text-xl font-bold text-center mb-8 text-blue-600">
            Support Information
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Support
              </label>
              <select
                name="support"
                value={formData.support}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              >
                <option value="">Select</option>
                <option value="Education">Education</option>
                <option value="Training">Training</option>
                <option value="Placement">Placement</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Support Type
              </label>
              <select
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              >
                <option value="">Select</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Institute Fees
              </label>
              <input
                type="text"
                name="instituteFees"
                value={formData.instituteFees}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Training Sector
              </label>
              <input
                type="text"
                name="trainingSector"
                value={formData.trainingSector}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mode
              </label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              >
                <option value="">Select</option>
                <option value="Online">Online</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>
          </form>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 m-3"
            >
              Submit and Proceed
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
