'use client'

import Link from "next/link"
import {  useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <> 
    <nav className=' flex flex-wrap  h-[5rem] items-center justify-between  mx-auto   py-3 shadow px-10 '>
     <div className='text-xl font-bold '>Paras.<span className='text-blue-400'>dev</span></div>
  
       <div className=' hidden md:flex gap-5 text-lg font-semibold '>
         <Link  href="/" className='hover:text-blue-400 transition-all ease-in-out'>Home</Link>
         <Link  href="/about" className='hover:text-blue-400 transition-all ease-in-out'>About</Link>
         <Link  href="/projects" className='hover:text-blue-400 transition-all ease-in-out'>Projects</Link>
         <Link  href="/contact" className='hover:text-blue-400 transition-all ease-in-out'>Contact</Link>
       </div>
       <button className='block md:hidden outline-none' onClick={handleNav}>
         <i className="hover:text-blue-400 transition-all ease-in-out fa-solid fa-bars-staggered mobile-menu text-xl items-center"></i>
       </button>
       
        {/* Mobile nav */}
        <div className={nav ? 'fixed top-0 left-0 w-full bg-white h-full z-30 flex flex-col justify-center ease-in-out duration-500' : 'fixed top-0 left-[-100%] w-full bg-white h-full z-30 flex flex-col justify-center ease-in-out duration-500'}>
         <button onClick={handleNav} className='outline-none absolute top-6 right-6'><i className="hover:text-blue-400 transition-all ease-in-out fa-solid fa-xmark text-3xl items-center"></i></button>
         <div className='flex flex-col gap-5 font-semibold  text-2xl text-center space-y-6'>
         <Link  href="/" className='hover:text-blue-400 transition-all ease-in-out'>Home</Link>
         <Link  href="/about" className='hover:text-blue-400 transition-all ease-in-out'>About</Link>
         <Link  href="/projects" className='hover:text-blue-400 transition-all ease-in-out'>Projects</Link>
         <Link  href="/contact" className='hover:text-blue-400 transition-all ease-in-out'>Contact</Link>
       </div>
        </div>

   </nav>
   </>
  )
}

export default Navbar