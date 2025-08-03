import React from 'react'
import { useSelector } from 'react-redux'
import AllPost from './AllPost'

function Profile() {

    const userInfo = useSelector((state) => state?.user?.userInfo)
    const allPost = useSelector((state) => state?.user?.allPost)


  return (
    <>
<div className="max-w-3xl w-full md:mx-7 mt-10 space-y-6">
  {/* Profile Info Heading */}
  <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>

  {/* Form */}
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={userInfo?.name}
        readOnly
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={userInfo?.email}
        readOnly
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="md:col-span-2">
      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
        Bio
      </label>
      <textarea
        id="bio"
        value={userInfo?.bio}
        readOnly
        rows="4"
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
    </div>
  </form>

  {/* All Post Heading */}

</div>
  <div className="text-center text-xl font-semibold text-gray-800 mt-13 pb-6 border-b">
    All Post
  </div>

  {/* AllPost Component Full Width */}
  <div className="w-full ">
    <AllPost allPost={allPost} />
  </div>
</>

  )
}

export default Profile