import React, { useState, useEffect } from "react";
import DetailedStudentData from "./DetailedStudentData";
import axios from 'axios'
import EditPopup from "./EditPopup";

interface Candidate {
  id: string;
  aadharNumber: string;
  candidateName: string;
  phoneNo: string;
  support: {
    supportType: string
  }
}

const DataTable: React.FC<{tabContext: string}> = ({ tabContext }) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<string>("")
  console.log(tabContext)

  useEffect(() => {
    // Fetch candidates from the backend
    const fetchCandidates = async () => {
      try {
        const response: any = await axios.post(`${import.meta.env.VITE_APP_API_URL}/user/getStudents`, {tabContext}); // Adjust URL as necessary
        
        console.log(response)
        setCandidates(response.data.data); // Assuming API response structure: { data: candidates }
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCandidates();
  }, [tabContext]);

  const handleEditSubmit = (updatedData: Candidate) => {
    setCandidates((prev) =>
      prev.map((candidate) =>
        candidate.id === updatedData.id ? updatedData : candidate
      )
    );
    // Optionally send the updated data to the server
  };

  if (loading) {
    return <p>Loading candidates...</p>;
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Aadhar Number
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Candidate Name
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Mobile Number
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Support Type
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {candidate.aadharNumber}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {candidate.candidateName}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {candidate.phoneNo}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {candidate.support?.supportType || ""}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={() => {setSelectedStudentId(candidate.aadharNumber); setMode("view")}}
                  style={{ marginRight: "5px" }}
                >
                   <svg className="size-7" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 442.04 442.04" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path> </g> <g> <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path> </g> <g> <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path> </g> </g> </g></svg>
                </button>
                <button
                  onClick={() => {setSelectedStudentId(candidate.aadharNumber); setMode("edit")}}
                  style={{ marginRight: "5px" }}
                >
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0000ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z" fill="#0000ff"></path> </g></svg>
                </button>
                <button
                  // delete button
                  style={{ color: "red" }}
                >
                  <svg className="size-6" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ff0000" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ff0000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mode === "view" &&
      selectedStudentId && (
        <DetailedStudentData
          aadhar={selectedStudentId}
          closePopup={() => setSelectedStudentId(null)}
        />
      )}

      {mode === "edit" && selectedStudentId && (
        <EditPopup
          tabContext={tabContext}
          candidateData={selectedStudentId}
          onClose={() => setSelectedStudentId(null)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default DataTable;