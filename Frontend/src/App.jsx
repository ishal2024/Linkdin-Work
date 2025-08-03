import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CircleUserRound, LayoutDashboard } from 'lucide-react'
import './App.css'
import { getUser, logoutUser } from './api/auth.api'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, setPost } from './Redux/userSlicer'
import Dashboard from './Components/Pages/Dashboard'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { getAllPost } from './api/post.api'
import Spinner from './Components/Pages/Spinner'
import { toast, ToastContainer } from 'react-toastify'

function App() {

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state?.user?.userInfo)
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)

  async function handleGetUser() {
    try {
      const res = await getUser()
      if (res?.status === 200) {
        dispatch(logIn(res?.data?.userInfo))
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function handleGetAllPost() {
    try {
      const res = await getAllPost()
      console.log(res)
      if (res?.status === 200) dispatch(setPost(res?.data?.userPosts))
    } catch (error) {
      console.log(error)
    }
  }

  async function handleLogout(){
    setSpinner(true)
    try {
      const res = await logoutUser()
      if(res?.status == 200){
          navigate('/login')
          setSpinner(false)
          dispatch(setPost([]))
      }
      else {
        setSpinner(false)
      toast.error(res?.data?.message)}
    } catch (error) {
      console.log(error)
      setSpinner(false)
    }
  }

  const sidebarLinks = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
    { name: "Profile", path: "/profile", icon: <CircleUserRound /> },

  ];

  useEffect(() => {
    handleGetUser()
    handleGetAllPost()
  }, [])

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <ToastContainer />
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white shadow-sm transition-all duration-300">
          <a href="https://prebuiltui.com">
            <img
              className="h-9"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
              alt="dummyLogoColored"
            />
          </a>
          <div className="flex items-center gap-4 text-gray-600 text-sm font-medium">
            <p className='hidden md:block'>User CreatedAt : {new Date(userInfo?.createdAt).toLocaleString()}</p>
            <p>Hi! {userInfo?.name}</p>
            <button 
            onClick={handleLogout}
            className="border rounded-full px-4 py-1 hover:bg-gray-100 transition">
              Logout
            </button>
          </div>
        </div>
     {spinner && <Spinner /> }
        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="md:w-64 w-16 border-r border-gray-200 bg-white flex flex-col pt-4 transition-all duration-300">
            {sidebarLinks.map((item, index) => (
              <NavLink
  to={item?.path}
  key={index}
  className={({ isActive }) =>
    `flex items-center px-4 py-3 gap-3 transition-all ${
      isActive
        ? "border-r-4 md:border-r-[6px] bg-indigo-100 border-indigo-500 text-indigo-600 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }`
  }
>
  {item.icon}
  <span className="hidden md:inline-block">{item.name}</span>
</NavLink>

            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1  overflow-y-auto  p-4">
            <Outlet />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
