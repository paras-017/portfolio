'use client'

import Link from "next/link"
import {  useState } from "react";
import { saveAs } from 'file-saver';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleDownload = () => {
    const resumeUrl = '/ParasSinghResumeUpdated.pdf'; // Update this with the actual URL of your PDF resume
    const fileName = 'ParasSinghResume.pdf'; // Update this with the desired file name

    saveAs(resumeUrl, fileName);
  };

  return (
    <> 
    <nav className=' flex flex-wrap  h-[5rem] items-center justify-between  mx-auto   py-3 shadow px-10 '>
     <Link  href='/' className='text-xl font-bold '>Paras.<span className='text-blue-600'>dev</span></Link>
  
       <div className=' hidden md:flex gap-5 text-lg font-semibold items-center'>
         <Link  href="/" className='hover:text-blue-600 transition-all ease-in-out'>Home</Link>
         <Link  href="/contact" className='hover:text-blue-600 transition-all ease-in-out'>Contact</Link>
         <Link  href="/blogs" className='hover:text-blue-600 transition-all ease-in-out'>Blogs</Link>
         <Link  href="/projects" className='hover:text-blue-600 transition-all ease-in-out'>Projects</Link>
         <button onClick={handleDownload} className="hover:bg-blue-600 transition-all ease-in-out bg-blue-500  rounded-lg p-1 text-white"><i className="fa-solid fa-download mx-2"></i>Resume</button>
       </div>
       <button className='block md:hidden outline-none' onClick={handleNav}>
         <i className="hover:text-blue-600 transition-all ease-in-out fa-solid fa-bars-staggered mobile-menu text-xl items-center"></i>
       </button>
       
        {/* Mobile nav */}
        <div className={nav ? 'fixed top-0 left-0 w-full bg-white h-full z-30 flex flex-col justify-center ease-in-out duration-500' : 'fixed top-0 left-[-100%] w-full bg-white h-full z-30 flex flex-col justify-center ease-in-out duration-500'}>
         <button onClick={handleNav} className='outline-none absolute top-6 right-6'><i className="hover:text-blue-600 transition-all ease-in-out fa-solid fa-xmark text-3xl items-center"></i></button>
         <div className='flex flex-col gap-5 font-semibold  text-2xl text-center space-y-6'>
          <Link onClick={handleNav}  href="/" className='hover:text-blue-600 transition-all ease-in-out'>Home</Link>
          <Link onClick={handleNav}  href="/projects" className='hover:text-blue-600 transition-all ease-in-out'>Projects</Link>
          <Link onClick={handleNav}  href="/contact" className='hover:bg-blue-600 hover:text-blue-600 transition-all ease-in-out'>Contact</Link>
          <Link onClick={handleNav}  href="/blogs" className='hover:bg-blue-600 hover:text-blue-600 transition-all ease-in-out'>Blogs</Link>
        <button onClick={handleDownload} className="transition-all ease-in-out inline-block py-2 px-4 bg-blue-600 text-white rounded-lg w-fit self-center"><i className="fa-solid fa-download mx-2"></i>Resume</button>
         </div>
          </div>

   </nav>
   </>
  )
}

export default Navbar