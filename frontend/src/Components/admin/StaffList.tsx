import { useEffect, useState } from "react"
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from "react-toastify";

interface AdminData {
        id: string; 
        username: string; 
        role: string; 
        password: string;
}

const StaffList = () => {
    const [data, setData] = useState<AdminData[]>([])
    const [loading, setLoading]= useState<boolean>(false)
    const [error, setError] = useState<string>(""); 
    const authToken = Cookies.get("token")
    const role = Cookies.get("role"); 
    
    const handleDelete = async ({username}: {username: string}) => {
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/deleteAdmin`, {username, authToken}); 

            if (response.status === 200 || response.status === 201) {
                toast.success("Admin removed")
                 
            }
            const arr = [...data]; 
            const findIndex = arr.findIndex((item) => item.username === username); 
            
            arr.splice(findIndex, 1); 
            console.log(arr); 
            setData(arr);


        } catch (err: any) {
            toast.error("Failed to delete admin")
        }
    }

    useEffect(() => {
         const fetchData = async () => {
            setLoading(true); 
            const response: any = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/getStaffList`, {authToken}); 
            console.log(response.data)
            try {
                if (response.status === 200 || response.status === 201) {
                    setData(response.data.data); 
                }
    
                
            } catch (err: any) {
                setError(err.response.data.message); 
            } finally {
                // console.log(data)
                setLoading(false); 
            }
            
        }

        fetchData(); 
       
    }, [])

    if (loading) {  
        return (
            <div>
                Still loading...
            </div>
        )

    }

    if (error) {
        return (
            <div className="text-red-600">{error || "No data to show"}</div>
        )
    }

    if (role !== "MASTER"){ 
        return (
            <div>
                Sorry but Only MASTER can view
            </div>
        )
    }

    
  return (
    <div>
        <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Admin ID
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Admin username
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Role alloted
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Admin Password
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((admin) => (
            <tr key={admin.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" , textAlign: "center"}}>
                {admin.id}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                {admin.username}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                {admin.role}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                {admin.password}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
              <button
                  // delete button
                  style={{ color: "red" }}   
                  onClick={() => {handleDelete({username: admin.username})}}
                >
                  <svg className="size-6" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ff0000" stroke="#ff0000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ff0000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default StaffList