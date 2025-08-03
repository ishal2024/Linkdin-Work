import React , {useState} from 'react'
import {useForm} from 'react-hook-form'
import { loginUser, registerUser } from '../../api/auth.api'
import { useDispatch } from 'react-redux'
import { logIn } from '../../Redux/userSlicer'
import { NavLink, useNavigate } from 'react-router-dom'
import Spinner from '../Pages/Spinner'
import {toast , ToastContainer} from 'react-toastify'

function Signup() {

    const {register , handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)

    async function handleRegister(data){
      setSpinner(true)
         try {
            console.log(data)
            const res = await registerUser(data)
            
            if(res?.status === 200){
                const user = loginUser({email : data?.email , password : data?.password})
                dispatch(logIn(user?.data?.user))
                 navigate('/')
                 setSpinner(false)
            }
            else{
              setSpinner(false)
              toast.error(res?.data?.message)
            }
         } catch (error) {
          
            toast.error(error?.response?.data?.message)
            setSpinner(false)
         }
    }

  return (
    
    <div className='w-screen h-screen flex justify-center items-center bg-gray-300'>
      <ToastContainer />
      <form onSubmit={handleSubmit(handleRegister)} className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">Sign Up</h1>
        <p className="text-gray-500 text-sm mt-2">Create your account to get started</p>

        {/* Name */}
        <div className="flex items-center w-full mt-8 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 9.5c-2.67 0-8 1.34-8 4v1.25C0 15.44.56 16 1.25 16h13.5c.69 0 1.25-.56 1.25-1.25V13.5c0-2.66-5.33-4-8-4z" fill="#6B7280"/>
          </svg>
          <input 
          {...register('name' , {required : true})}
          type="text" name="name" placeholder="Full Name" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required />
        </div>

        {/* Email */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
          </svg>
          <input 
          {...register('email' , {required : true})}
          type="email" name="email" placeholder="Email id" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
          </svg>
          <input 
          {...register('password' , {required : true})}
          type="password" name="password" placeholder="Password" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required />
        </div>

        {/* Bio */}
        <div className="mt-4 w-full">
          <textarea 
          {...register('bio' , {required : true})}
          name="bio" rows="3" placeholder="Bio" className="w-full border border-gray-300/80 rounded-2xl p-3 text-sm text-gray-700 placeholder-gray-500 resize-none outline-none" required></textarea>
        </div>

        <button type="submit" className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
          Sign Up
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Already have an account? <NavLink to={'/login'} className="text-indigo-500" href="#">Login</NavLink>
        </p>
      </form>
       {spinner && <Spinner />}
    </div>
  )
}

export default Signup
