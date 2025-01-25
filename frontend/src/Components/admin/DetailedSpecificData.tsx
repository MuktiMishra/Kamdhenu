interface detailedSpecficDataInterface {
    trainingSupport?: {
        id: string,
        studentAadhar: string,
        paid: boolean,
        fees: string,
        trainingSector: string,
        location: string,
        organization: string,
        mode: string,
        role: string,
        FilledBy: string
    }; 
    placementSupport?: {
        id: string  
        studentAadhar: string,
        industry: string,
        location: string,
        salary: string,
        company: string,
        profileJob: string,
        paid: boolean,
        FilledBy: string ,
    }
    educationSupport?: {
        furtherQualification: string; 
        FilledBy: string; 
        paid: boolean; 
        fees: string; 
    }
    closePopup: () => void; 
        
}


const DetailedSpecificData: React.FC<detailedSpecficDataInterface> = ({ 
    trainingSupport, 
    placementSupport, 
    educationSupport, 
    closePopup 
}) => {
    if (!trainingSupport && !placementSupport && !educationSupport) {
        return (
            <div className="text-center p-4">
                <p>Sorry, but data is empty.</p>
            </div>
        );
    }

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
          
                    {trainingSupport && (
                        <>
                            <h1 className="col-span-2 font-bold">Training Support</h1>
                            {Object.entries(trainingSupport).map(([key, value]) => (
                                <p key={key}>
                                    <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                                    {value?.toString() || "N/A"}
                                </p>
                            ))}
                        </>
                    )}

          
                    {placementSupport && (
                        <>
                            <h1 className="col-span-2 font-bold">Placement Support</h1>
                            {Object.entries(placementSupport).map(([key, value]) => (
                                <p key={key}>
                                    <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                                    {value?.toString() || "N/A"}
                                </p>
                            ))}
                        </>
                    )}

                    {educationSupport && (
                        <>
                            <h1 className="col-span-2 font-bold">Education Support</h1>
                            {Object.entries(educationSupport).map(([key, value]) => (
                                <p key={key}>
                                    <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                                    {value?.toString() || "N/A"}
                                </p>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailedSpecificData;