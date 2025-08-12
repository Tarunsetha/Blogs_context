import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import "./Blogs.css"
const Blogs = () => {
  // Consume context
  const { loading, posts } = useContext(AppContext);
  console.log("printing inside blogs component");
  console.log(posts);
  return (
    <div className='w-11/12 h-screen max-w-[680px] py-8 flex flex-col gap-y-7 mt-[67px] mb-[70px] justify-center items-center'>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No posts found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
           <p className='font-bold text-lg'>
            {post.title}
            </p>
            <p className='text-sm mt-[5px]'>
              By <span className='italic'>{post.author}</span>
               <span>on</span>
               <span className='underline font-bold'>{post.category}</span>
            </p>
           <p className='text-sm mt-[4px]'>Posted on {post.date} </p>
           <p className='text-md mt-[14px]'>{post.content}</p>
           <div className='flex gap-x-2'>
            {post.tags.map( (tag,index) => {
              return <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
            })}
           </div>

          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
