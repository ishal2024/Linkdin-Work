import React, { useEffect } from 'react'
import {getUser} from '../../api/auth.api'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {

    const navigate = useNavigate()

    async function getUserData(){
        try {
            const response = await getUser()
            if(!response?.data?.userInfo) navigate('/login')
        } catch (error) {
            navigate('/login')
        }
    }

    useEffect(() => {
       getUserData()
    },[])

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute