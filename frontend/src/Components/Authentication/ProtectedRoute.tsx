import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {

    const [verified, setVerified]= useState(false); 
    const navigate = useNavigate()

    const verifyUser = async () => {
        try {
            
            const authToken = Cookies.get('token')
            console.log(authToken)

            if (!authToken) {
                console.log('No auth token found');
                navigate('/admin/login');
                return;
            }

           
            const response = await axios.post(
                `${import.meta.env.VITE_APP_API_URL}/admin/verify-user`,
                {authToken},
                
            );

            if (response.status === 200) {
                setVerified(true);
            } else {
                console.log('User is not verified');
                navigate('/admin/login');
            }
        } catch (error) {
            console.log('Error verifying user:', error);
            navigate('/admin/login');
        }
    }

    useEffect(() => {
        verifyUser(); 
    }, [])

  return (
    <>
        {verified ? children : "Loading"}
    </>
  )
}

export default ProtectedRoute