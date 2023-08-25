import React from 'react'
import blogArray from './blogs.json';
import { FcReading } from 'react-icons/fc';
const page = () => {
   
  return (

        <div className="max-w-6xl justify-center m-auto  flex flex-wrap gap-6 mt-4">
            {blogArray.map((blog) => (
                <div key={blog.id} className="p-2 border rounded shadow-md w-[21rem]">
                <img src={blog.imgUrl} alt={blog.name} className="mb-4 rounded " />
                <h2 className="text-xl font-semibold mb-2">{blog.name}</h2>
                <p className="mb-4 line-clamp-3">{blog.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">{blog.createdAt}</span>
                    <div className='flex items-center '><FcReading className='text-2xl mr-1'/> <span className="text-gray-500">{blog.readTime}</span></div>
                </div>
                <button className="mt-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    <a target='_blank' href={blog.link} >
                      Read More
                    </a>
                </button>
                </div>
            ))}
            </div>
  )
}

export default page