import { useEffect, useState } from "react"
import axios from 'axios'
import Cookies from 'js-cookie'

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
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default StaffList