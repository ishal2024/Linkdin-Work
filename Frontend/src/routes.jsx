import {createBrowserRouter} from 'react-router-dom'
import App from './App'

import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import Dashboard from './Components/Pages/Dashboard'
import Profile from './Components/Pages/Profile'
import ProtectedRoute from './Components/Auth/ProtectedRoute'


const router = createBrowserRouter([
    {
        path : '/',
        element : <ProtectedRoute><App /></ProtectedRoute>,
        children : [
            {path : '/' , element : <Dashboard />},
            {path : '/profile' , element : <Profile />},
        ]
    },
    {
        path : '/signup',
        element : <Signup />
    },
     {
        path : '/login',
        element : <Login />
    }
])

export default router