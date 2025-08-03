import React, { useEffect, useState } from 'react'
import { createPost, getAllPost } from '../../api/post.api'
import AllPost from './AllPost'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../../Redux/userSlicer'
import Spinner from './Spinner'
import {toast , ToastContainer} from 'react-toastify'

function Dashboard() {

    const [content, setContent] = useState("")
    const allPost = useSelector((state) => state?.user?.allPost)
    const [spinner, setSpinner] = useState(false)

    const dispatch = useDispatch()

    async function handleCreatePost() {
        setSpinner(true)
        try {
            const res = await createPost({ content })
            if (res?.status === 200) {
                dispatch(setPost([...allPost, res?.data?.post]))
                setSpinner(false)
            }
            else{ 
                setSpinner(false)
                toast.error(res?.data?.message)
            }
        } catch (error) {
            setSpinner(false)
            toast.error(error?.response?.data?.message)
        }
    }





    console.log(allPost)

    // useEffect(() => {
    //     handleGetAllPost()
    // } , [isAdded])


    return (
        <>
            {/* Add Post Section */}
            <div className="w-full flex justify-center mt-7">
                <ToastContainer />
                <div className="flex w-full max-w-xl items-center gap-3 px-1 md:px-4">
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target?.value)}
                        placeholder="Enter Post"
                        className="flex-1 px-5 py-3 border border-gray-300 rounded-lg text-base outline-none"
                    />
                    <button onClick={handleCreatePost} className="px-5 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-base">
                        Add
                    </button>
                </div>
            </div>
            {spinner && <Spinner /> }
            <div className="text-center text-xl font-semibold text-gray-800 mt-13 pb-6 border-b">
                All Post
            </div>
            <div>
                <AllPost allPost={allPost} />
            </div>
        </>
    )
}

export default Dashboard