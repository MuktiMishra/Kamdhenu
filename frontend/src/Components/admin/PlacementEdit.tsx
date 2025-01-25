import { useState } from "react";
import axios from 'axios'; 
import Cookies from 'js-cookie'
import { toast } from "react-toastify";

interface PlacementSupportData {
    industry: string; 
    location: string; 
    salary: string; 
    company: string; 
    profileJob: string; 
    paid: string; 
    fees: string; 
    authToken: string | undefined; 
    aadhar: string | undefined; 
}
const PlacementEdit = ({aadhar}: {aadhar: string | undefined}) => {

    const authToken = Cookies.get("token"); 

    const [formData, setFormData] = useState<PlacementSupportData>({
        industry: "", location: "", salary: "", company: "", profileJob: "", paid: "", fees: "", authToken, aadhar: aadhar 
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target; 
        console.log(name)
        if (name === "fees" || name === "salary") {
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

        if (!formData.aadhar || (formData.fees === "0" && !formData.fees) || !formData.industry || !formData.location || !formData.salary || !formData.company || !formData.profileJob || !formData.paid) {
            toast.error("Fill data properly")
            return; 
        } 

        try {

            const response: any = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/updatePlacementSupport`, formData); 
            
            if (response.status === 200 || response.status === 201) {
                toast.success("Data Created successfully"); 
            } else {
                toast.error("Error in creating data"); 
            }

        } catch (err: any) {
            toast.error(err.response.data.message)
        }
    }

  return (
    <div className="flex flex-col w-full h-full">
        <h1 className="text-4xl font-bold">Enter Placement Details for Aadhar Number: {aadhar}</h1>

        <div className="w-full h-full mt-10">
            <div className="industry flex flex-col mb-6">
                <label htmlFor="industry" className="mb-2 font-bold text-lg">Industry</label>
                <input onChange={handleChange} id="industry" type="text" name="industry" className="p-4 font-medium border-2 w-[40%]" placeholder="industry...."/>
            </div>
            <div className="location flex flex-col mb-6">
                <label htmlFor="location" className="mb-2 font-bold text-lg">Location</label>
                <input onChange={handleChange} id="location" type="text" name="location" className="p-4 font-medium border-2 w-[40%]" placeholder="location...."/>
            </div>
            <div className="salary flex flex-col mb-6">
                <label htmlFor="salary" className="mb-2 font-bold text-lg">Salary</label>
                <input onChange={handleChange} value={formData.salary} id="salary" type="text" name="salary" className="p-4 font-medium border-2 w-[40%]" placeholder="salary...."/>
            </div>
            <div className="company flex flex-col mb-6">
                <label htmlFor="company" className="mb-2 font-bold text-lg">Company</label>
                <input onChange={handleChange} id="company" type="text" name="company" className="p-4 font-medium border-2 w-[40%]" placeholder="company...."/>
            </div>
            <div className="profile flex flex-col mb-6">
                <label htmlFor="profile" className="mb-2 font-bold text-lg">Job Profile</label>
                <input onChange={handleChange} id="profile" type="text" name="profileJob" className="p-4 font-medium border-2 w-[40%]" placeholder="job...."/>
            </div>
            <div className="paidS flex flex-col mb-6">
                <label htmlFor="paid" className="mb-2 font-bold text-lg">Paid Support</label>
                <select name="paid" defaultValue={"Select"} onChange={handleChange} className="p-4 font-medium border-2 w-[40%]">
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

export default PlacementEdit