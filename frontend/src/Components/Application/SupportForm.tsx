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

interface SupportFormProps {
  onSubmit: (data: FormData) => void;
  onPrevious?: () => void;
}

const SupportForm: React.FC<SupportFormProps> = ({ onSubmit, onPrevious }) => {
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

    if (isNaN(Number(formData.instituteFees)) || isNaN(Number(formData.salary))) {
      alert("Please enter valid numeric values for institute fees and salary");
      return;
    }

    for (const field in formData) {
      if (!formData[field as keyof FormData]) {
        alert(`Please fill the ${field} field`);
        return;
      }
    }

    onSubmit(formData);
  };

  return (
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
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

        <div className="sm:col-span-2 flex justify-between">
          {onPrevious && (
              <button
                  type="button"
                  onClick={onPrevious}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Previous
              </button>
          )}
          <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
  );
};

export default SupportForm;

