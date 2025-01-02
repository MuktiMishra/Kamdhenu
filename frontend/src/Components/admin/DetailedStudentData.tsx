import React, { useState, useEffect } from "react";

interface Data {
  sevayojanRegNo: string;
  sevayojanRegDate: string;
  aadharNumber: string;
  emailId: string;
  candidateName: string;
  fathersName: string;
  mothersName: string;
  address: string;
  state: string;
  city: string;
  mobileNumber: string;
  alternateMobileNumber: string;
  dob: string;
  gender: string;
  category: string;
  religion: string;
  residentialStatus: string;
  financialStatus: string;
  fathersOccupation: string;
  guardianContactNumber: string;
  qualificationBoard: string;
  passingYear: string;
  percentage: string;
  division: string;
  date: string;
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

const testData: Data = {
  sevayojanRegNo: "12345",
  sevayojanRegDate: "2025-01-01",
  aadharNumber: "1234-5678-9012",
  emailId: "test@example.com",
  candidateName: "John Doe",
  fathersName: "Mr. Doe",
  mothersName: "Mrs. Doe",
  address: "123 Test Street",
  state: "Test State",
  city: "Test City",
  mobileNumber: "1234567890",
  alternateMobileNumber: "0987654321",
  dob: "2000-01-01",
  gender: "Male",
  category: "General",
  religion: "Test Religion",
  residentialStatus: "Resident",
  financialStatus: "Stable",
  fathersOccupation: "Engineer",
  guardianContactNumber: "1122334455",
  qualificationBoard: "Test Board",
  passingYear: "2020",
  percentage: "85%",
  division: "First",
  date: "2025-01-01",
  support: "Yes",
  supportType: "Financial",
  course: "Computer Science",
  duration: "4 Years",
  instituteFees: "200,000",
  trainingSector: "IT",
  location: "Test Location",
  mode: "Offline",
  role: "Software Engineer",
  salary: "1,000,000",
};

const DetailedStudentData: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    setData(testData); // Load test data on component mount
  }, []);

  return (
    <div className="p-4">
      {data && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Candidate Details</h2>
              <div className="mt-4 text-right">
              <button
                onClick={() => setData(null)}
                className="px-4 py-2"
              >
                <svg className="size-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#ff0000"></path> </g></svg>
              </button>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p><strong>Sevayojan Reg No:</strong> {data.sevayojanRegNo}</p>
              <p><strong>Sevayojan Reg Date:</strong> {data.sevayojanRegDate}</p>
              <p><strong>Aadhar Number:</strong> {data.aadharNumber}</p>
              <p><strong>Email ID:</strong> {data.emailId}</p>
              <p><strong>Candidate Name:</strong> {data.candidateName}</p>
              <p><strong>Father's Name:</strong> {data.fathersName}</p>
              <p><strong>Mother's Name:</strong> {data.mothersName}</p>
              <p><strong>Address:</strong> {data.address}</p>
              <p><strong>State:</strong> {data.state}</p>
              <p><strong>City:</strong> {data.city}</p>
              <p><strong>Mobile Number:</strong> {data.mobileNumber}</p>
              <p><strong>Alternate Mobile Number:</strong> {data.alternateMobileNumber}</p>
              <p><strong>Date of Birth:</strong> {data.dob}</p>
              <p><strong>Gender:</strong> {data.gender}</p>
              <p><strong>Category:</strong> {data.category}</p>
              <p><strong>Religion:</strong> {data.religion}</p>
              <p><strong>Residential Status:</strong> {data.residentialStatus}</p>
              <p><strong>Financial Status:</strong> {data.financialStatus}</p>
              <p><strong>Father's Occupation:</strong> {data.fathersOccupation}</p>
              <p><strong>Guardian Contact Number:</strong> {data.guardianContactNumber}</p>
              <p><strong>Qualification Board:</strong> {data.qualificationBoard}</p>
              <p><strong>Passing Year:</strong> {data.passingYear}</p>
              <p><strong>Percentage:</strong> {data.percentage}</p>
              <p><strong>Division:</strong> {data.division}</p>
              <p><strong>Date:</strong> {data.date}</p>
              <p><strong>Support:</strong> {data.support}</p>
              <p><strong>Support Type:</strong> {data.supportType}</p>
              <p><strong>Course:</strong> {data.course}</p>
              <p><strong>Duration:</strong> {data.duration}</p>
              <p><strong>Institute Fees:</strong> {data.instituteFees}</p>
              <p><strong>Training Sector:</strong> {data.trainingSector}</p>
              <p><strong>Location:</strong> {data.location}</p>
              <p><strong>Mode:</strong> {data.mode}</p>
              <p><strong>Role:</strong> {data.role}</p>
              <p><strong>Salary:</strong> {data.salary}</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setData(null)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedStudentData;
