import { useState } from "react";
import axios from 'axios'; 
import Cookies from 'js-cookie'
import { toast } from "react-toastify";

interface TrainingEditData {
    paid: string; 
    fees: string; 
    trainingSector: string; 
    location: string; 
    organization: string; 
    mode: string; 
    role: string; 
    authToken: string | undefined; 
    aadhar: string | undefined; 
}


const TrainingEdit = ({aadhar}: {aadhar: string | undefined}) => {
    const authToken = Cookies.get("token")
    const [formData, setFormData] = useState<TrainingEditData>({
        paid: "", fees: "0", trainingSector: "", location: "", organization: "", mode: "", role: "", aadhar: aadhar, authToken: authToken
    }); 

    const handleChange = (e: any) => {
        const { name, value } = e.target; 
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
         if (!formData.aadhar || (formData.fees === "0" && !formData.fees) || !formData.trainingSector || !formData.location || !formData.organization || !formData.mode || !formData.role || !formData.paid) {
            toast.error("Fill data properly")
            return; 
         } 

         try {

            const response: any = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/updateTrainingSupport`, formData); 

            if (response.status === 200 || response.status === 201) {
                toast.success("Created succesfully"); 
            } else {
                toast.error("Error in creating support")
            }

         } catch (err: any) {
            toast.error(err.response.data.message); 
         }
    }

  return (
    <div className="flex flex-col w-full h-full">
        <h1 className="text-4xl font-bold">Enter Training Support Details for Aadhar Number: {aadhar}</h1>

        <div className="w-full h-full mt-10">
            <div className="trainingSector flex flex-col mb-6">
                <label htmlFor="trainingSector" className="mb-2 font-bold text-lg">Training Sector</label>
                <input onChange={handleChange} id="trainingSector" type="text" name="trainingSector" className="p-4 font-medium border-2 w-[40%]" placeholder="sector..."/>
            </div>
            <div className="location flex flex-col mb-6">
                <label htmlFor="location" className="mb-2 font-bold text-lg">Location</label>
                <input onChange={handleChange} id="location" type="text" name="location" className="p-4 font-medium border-2 w-[40%]" placeholder="location..."/>
            </div>
            <div className="organization flex flex-col mb-6">
                <label htmlFor="organization" className="mb-2 font-bold text-lg">Organization</label>
                <input onChange={handleChange} id="organization" type="text" name="organization" className="p-4 font-medium border-2 w-[40%]" placeholder="organization..."/>
            </div>
            <div className="role flex flex-col mb-6">
                <label htmlFor="role" className="mb-2 font-bold text-lg">Role</label>
                <input onChange={handleChange} id="role" type="text" name="role" className="p-4 font-medium border-2 w-[40%]" placeholder="for role..."/>
            </div>
            <div className="mode flex flex-col mb-6">
                <label htmlFor="mode" className="mb-2 font-bold text-lg">Role</label>
                <select name="mode" id="mode" defaultValue={"Select"} onChange={handleChange} className="p-4 font-medium border-2 w-[40%]">
                    <option className="disabled" disabled>Select</option>
                    <option value={"ONSITE"}>ONSITE</option>
                    <option value={"REGULAR"}>REGULAR</option>
                </select>
            </div>
            <div className="paidS flex flex-col mb-6">
                <label htmlFor="paid" className="mb-2 font-bold text-lg">Paid Support</label>
                <select name="paid" defaultValue={"Select"} onChange={handleChange} className="p-4 font-medium border-2 w-[40%]">
                    <option className="disabled" disabled>Select</option>
                    <option value={"paid"}>Paid</option>
                    <option value={"free"} onSelect={() => {setFormData({...formData, ["fees"]: "0"})}}>Free</option>
                </select>
            </div>
            {formData.paid === "paid" && <div className="furtherQual flex flex-col mb-6">
                <label htmlFor="fees" className="mb-2 font-bold text-lg">Paid Amt (if paid)</label>
                <input value={formData.fees} onChange={handleChange} id="qual" type="text" name="fees" className="p-4 font-medium border-2 w-[40%]" placeholder="fees...."/>
            </div>}
            <div className="furtherQual flex flex-col mb-6">
                <button onClick={handleSubmit} className="hover:transition-all p-2 border-2 border-white bg-blue-600 w-[15%] text-white hover:opacity-80 hover:translate-y-[-2px] rounded-xl">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default TrainingEdit