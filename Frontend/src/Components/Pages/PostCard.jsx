import React from 'react'

function PostCard({post}) {
  return (


<div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-xl max-w-[300px] mx-auto mt-10">
  <div className="bg-gray-100 rounded-xl p-6 overflow-auto">
    <p className="text-gray-800 text-sm mb-4">
      {post?.content}
    </p>
    <p className="text-xs text-gray-500">
      Created at: {new Date(post?.createdAt).toLocaleString()}
    </p>
  </div>
</div>









  )
}

export default PostCard