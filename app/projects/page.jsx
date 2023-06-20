'use client'
import TextTransition, { presets } from 'react-text-transition';
import Projectcards from '@/components/Projectcards'
import React, { useEffect, useState } from 'react'
import projectApi from './project.json'


const Project = () => {
  const TEXTS = ['Awesome', 'Aesthetic', 'Innovative'];
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
      }, [])
  
  return (    
    <>
    <div className='flex flex-col items-center my-10 space-y-10 px-4'>
      {projectApi.map((project)=>(
        <div key={project.id} >
              <Projectcards {...project}/>
          </div>
      ))}
    </div>
   <div className="bg-[#f0f0f0]">
   <div className='  py-[5rem] w-fit mx-auto md:space-x-3 ' >
      <div className='text-left text-2xl font-semibold flex md:flex-row flex-col justify-center md:items-baseline px-4  md:space-x-2  '>
        <div className=''>New</div>
        <div className=' text-5xl font-bold text-blue-600 w-[15rem]  '><TextTransition  springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]} </TextTransition></div>
        <div className=' '> projects coming soon.. 🤠 </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default Project