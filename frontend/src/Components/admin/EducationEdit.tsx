import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'; 
import Cookies from 'js-cookie'; 

interface EducationData {
    furtherQualification: string; 
    paid: string; 
    fees: string; 
    aadhar: string | undefined; 
    authToken: string | undefined; 
}

const EducationEdit = ({aadhar} :{aadhar: string | undefined;}) => {
    const authToken = Cookies.get("token")

    console.log(aadhar)
    const [formData, setFormData] = useState<EducationData>({
        furtherQualification: "", paid: "", fees: "0", aadhar: aadhar, authToken: authToken
    }); 

    const handleChange = (e: any) => {
        const {name, value} = e.target; 
        if (name === "fees") {
            console.log("I am here")
            const numericValue = value.replace(/[^0-9]/g, "");
            console.log(numericValue)
            setFormData({...formData, [name]: numericValue})
        } else {
            console.log("I am here 2")
            setFormData({...formData, [name]: value})
        }
    }

    const handleSubmit = async () => {
        

        if (!formData.aadhar || (formData.fees === "0" && !formData.fees) || !formData.furtherQualification || !formData.paid) {
            toast.error("Fill data properly")
            return; 
        } 

        try {

            const response: any = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/updateEducationSupport`, formData); 
            
            if (response.status === 200 || response.status === 201) {
                toast.success("Data updated successfully")
            } else {
                toast.error("Error in updating data")
            }

        } catch (err: any) {
            toast.error(err.response.data.message); 
        }
    }

  return (
    <div className="flex flex-col w-full h-full"> 
        <h1 className="text-4xl font-bold">Enter Education Details for Aadhar Number: {aadhar}</h1>

        <div className="w-full h-full mt-10">
            <div className="furtherQual flex flex-col mb-6">
                <label htmlFor="qual" className="mb-2 font-bold text-lg">Further Qualification</label>
                <input onChange={handleChange} id="qual" type="text" name="furtherQualification" className="p-4 font-medium border-2 w-[40%]" placeholder="qualification...."/>
            </div>
            <div className="paidS flex flex-col mb-6">
                <label htmlFor="paid" className="mb-2 font-bold text-lg">Paid Support</label>
                <select name="paid" onChange={handleChange} defaultValue={"Select"} className="p-4 font-medium border-2 w-[40%]">
                    <option className="disabled" disabled>Select</option>
                    <option value={"paid"}>Paid</option>
                    <option value={"free"}>Free</option>
                </select>
            </div>
            {formData.paid === "paid" && <div className="furtherQual flex flex-col mb-6">
                <label htmlFor="qual" className="mb-2 font-bold text-lg">Paid Amt (if paid)</label>
                <input value={formData.fees} onChange={handleChange} id="qual" type="text" name="fees" className="p-4 font-medium border-2 w-[40%]" placeholder="amt...."/>
            </div>}
            <div className="furtherQual flex flex-col mb-6">
                <button onClick={handleSubmit} className="hover:transition-all p-2 border-2 border-white bg-blue-600 w-[15%] text-white hover:opacity-80 hover:translate-y-[-2px] rounded-xl">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default EducationEdit