import React, { useState, useEffect } from "react";
import axios from 'axios'

interface Candidate {
  candidateName: string;
  aadharNumber: string;
  emailId: string;
  phoneNo: string;
  address: string;
  state: string;
  city: string;
  dob: string;
  gender: string;
  category: string;
  religion: string;
  residentialStatus: string;
  financialStatus: string;
  fathersOccupation: string;
  guardianContactNumber: string;
  termsAccepted: boolean;
  education?: {
    qualificationBoard: string;
    passingYear: string;
    percentage: string;
    division: string;
    date: string;
  };
  trainingSupport?: {
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
  };
  regTime: string;
  [key: string]: any;
}

interface Props {
  aadhar: string;
  closePopup: () => void;
  tabContext: string; 
}

const DetailedStudentData: React.FC<Props> = ({ aadhar, closePopup, tabContext }) => {
  const [data, setData] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student data when component mounts
    const fetchStudentData = async () => {
      try {
        const response: any = await axios.get(`${import.meta.env.VITE_APP_API_URL}/user/detailedstudent/${aadhar}?context=${tabContext}`);
      
        setData(response.data.data); 
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [aadhar]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-center text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-center text-xl text-red-500">Failed to load data</p>
          <button onClick={closePopup} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    );
  }

  const formatKey = (key: string): string =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Candidate Details</h2>
          <button onClick={closePopup} className="px-4 py-2 text-red-600">
            Close
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(data).map(([key, value]) => {
            if (key === "education" || key === "support") return null;
            return (
              <p key={key}>
                <strong>{formatKey(key)}:</strong> {value?.toString() || "N/A"}
              </p>
            );
          })}
          {data.education && (
            <>
              <h3 className="col-span-2 text-lg font-semibold mt-4">
                Education Details
              </h3>
              {Object.entries(data.education).map(([key, value]) => (
                <p key={key}>
                  <strong>{formatKey(key)}:</strong> {value?.toString() || "N/A"}
                </p>
              ))}
            </>
          )}
          {data.support && (
            <>
              <h3 className="col-span-2 text-lg font-semibold mt-4">
                Support Details
              </h3>
              {Object.entries(data.support).map(([key, value]) => (
                <p key={key}>
                  <strong>{formatKey(key)}:</strong> {value?.toString() || "N/A"}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailedStudentData;