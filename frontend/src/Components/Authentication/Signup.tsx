import { useState } from "react";
import axios from 'axios'


const steps = ["Personal Information", "Education Details", "Support Details"];

export default function Signup() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        personalInfo: {
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
        },
        educationInfo: {
            qualificationBoard: "",
            passingYear: "",
            percentage: "",
            division: "",
            date: "",
        },
        supportInfo: {
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
        },
    });

    const handleNext = (data: any) => {
        const stepKey = currentStep === 0 ? "personalInfo" : currentStep === 1 ? "educationInfo" : "supportInfo";
        setFormData((prevData) => ({
            ...prevData,
            [stepKey]: data,
        }));
        setCurrentStep((prev) => prev + 1);
        console.log(currentStep)
    };

    const handlePrevious = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = async (data: any) => {
        console.log("idhar aagaye")
        const finalData = {
            ...formData,
            supportInfo: data,
        };
        console.log("Final Form Data:", finalData);

        const response: any = await axios.post("http://localhost:8000/api/user/signup", formData)
        console.log(response)
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-7xl space-y-8 bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-md">
                {/* Step Indicator */}
                <div className="flex justify-between mb-8">
                    {steps.map((step, index) => (
                        <div
                            key={step}
                            className={`flex flex-col items-center ${
                                index <= currentStep ? "text-blue-600" : "text-gray-300"
                            }`}
                        >
                            <div
                                className={`rounded-full transition duration-500 ease-in-out border-2 h-12 w-12 flex items-center justify-center py-3 ${
                                    index <= currentStep ? "border-blue-600" : "border-gray-300"
                                }`}
                            >
                                {index + 1}
                            </div>
                            <div className="text-center mt-2">{step}</div>
                        </div>
                    ))}
                </div>

                {/* Form Rendering */}
                {currentStep === 0 && (
                    <PersonalInfoForm
                        data={formData.personalInfo}
                        onSubmit={handleNext}
                    />
                )}
                {currentStep === 1 && (
                    <EducationForm
                        data={formData.educationInfo}
                        onSubmit={handleNext}
                        onPrevious={handlePrevious}
                    />
                )}
                {currentStep === 2 && (
                    <SupportForm
                        data={formData.supportInfo}
                        onSubmit={handleSubmit}
                        onPrevious={handlePrevious}
                    />
                )}
            </div>
        </div>
    );
}

function PersonalInfoForm({ data, onSubmit }: any) {
    const [form, setForm] = useState(data);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev: any) => ({ ...prev, [name]: value }));
    };
    return (
        <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg rounded-md p-6">
            <div className="text-lg md:text-xl font-bold text-center mb-8 text-blue-600">
                Personal Information
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={onSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Sevayojan Reg. No
                    </label>
                    <input
                        type="text"
                        name="sevayojanRegNo"
                        value={form.sevayojanRegNo}
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
                        value={form.sevayojanRegDate}
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
                        value={form.aadharNumber}
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
                        value={form.emailId}
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
                        value={form.candidateName}
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
                        value={form.fathersName}
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
                        value={form.mothersName}
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
                        value={form.address}
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
                        value={form.state}
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
                        value={form.city}
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
                        value={form.financialStatus}
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
                        value={form.residentialStatus}
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
                        value={form.fathersOccupation}
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
                        value={form.guardianContactNumber}
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
                        value={form.category}
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
                        value={form.religion}
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
                        checked={form.termsAccepted}
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
                        onClick={() => onSubmit(form)}
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                        disabled={!form.termsAccepted}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

function EducationForm({ data, onSubmit, onPrevious }: any) {
    const [form, setForm] = useState(data);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev: any) => ({ ...prev, [name]: value }));
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
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={onSubmit}>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Qualification Board
                            </label>
                            <select
                                name="qualificationBoard"
                                value={form.qualificationBoard}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-md bg-gray-100"
                                required
                            >
                                <option value="">Select</option>
                                <option value="CBSE">CBSE</option>
                                <option value="ICSE">ICSE</option>
                                <option value="STATE BOARD">State Board</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Passing Year
                            </label>
                            <input
                                type="number"
                                name="passingYear"
                                value={form.passingYear}
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
                                value={form.percentage}
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
                                value={form.division}
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
                                value={form.date}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-md bg-gray-100"
                                required
                            />
                        </div>
                    </form>

                    <div className="sm:col-span-2 flex justify-between mt-5">
                        <button type="button" onClick={onPrevious} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">
                            Previous
                        </button>
                        <button type="submit" onClick={() => onSubmit(form)} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700" >Next</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

function SupportForm({ data, onSubmit, onPrevious }: any) {
    const [form, setForm] = useState(data);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev: any) => ({ ...prev, [name]: value }));
    };
    return (
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Support
                </label>
                <select
                    name="support"
                    value={form.support}
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
                    value={form.supportType}
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
                    value={form.course}
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
                    value={form.duration}
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
                    value={form.instituteFees}
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
                    value={form.trainingSector}
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
                    value={form.location}
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
                    value={form.mode}
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
                    value={form.role}
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
                    value={form.salary}
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
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    onClick={(e: any) => {
                        e.preventDefault();
                        onSubmit(form)
                    }}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
