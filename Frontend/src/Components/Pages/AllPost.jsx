import React from 'react'
import PostCard from './PostCard'

function AllPost({allPost}) {
  return (
    <>
    {allPost.length !== 0 ? <div className='flex flex-wrap gap-5'>
        {allPost?.slice().reverse().map((post) => {
            return <PostCard key={post?._id} post = {post}/>
        })}
    </div> : 
    <div className='w-full flex justify-center items-center mt-15'>
      <p className='text-3xl '>Please Add Post</p>
    </div>
    }
    </>
  )
}

export default AllPost