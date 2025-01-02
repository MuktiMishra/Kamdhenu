import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  qualificationBoard: string;
  passingYear: string;
  percentage: string;
  division: string;
  date: string;
}

const EducationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    qualificationBoard: "",
    passingYear: "",
    percentage: "",
    division: "",
    date: "",
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


    if (isNaN(Number(formData.percentage)) || Number(formData.percentage) < 0 || Number(formData.percentage) > 100) {
      alert("Please enter a valid percentage between 0 and 100");
      return;
    }

    
    for (const field in formData) {
      if (!formData[field as keyof FormData]) {
        alert(`Please fill the ${field} field`);
        return;
      }
    }

   
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <div className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-blue-600">
        Qualification Details Form
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6">
        <div className="hidden lg:block lg:w-1/3">
          <div className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-[#000000] p-5">Share your <span className="text-[#0000ff]">Qualification</span> details</div>
          <img
            className="h-60 rounded-md"
            src="educationForm.png"
            alt="Form Illustration"
          />
        </div>

        <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg rounded-md p-6">
          <div className="text-lg md:text-xl font-bold text-center mb-8 text-blue-600">
            Qualification Information
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
           
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Qualification Board
              </label>
              <input
                type="text"
                name="qualificationBoard"
                value={formData.qualificationBoard}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passing Year
              </label>
              <input
                type="number"
                name="passingYear"
                value={formData.passingYear}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Percentage
              </label>
              <input
                type="text"
                name="percentage"
                value={formData.percentage}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
                required
              >
                <option value="">Select</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
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

export default EducationForm;
