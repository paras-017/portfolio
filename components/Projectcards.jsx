import Link from 'next/link'
import React from 'react'

const Projectcards = ({id,projectImg,projectName,projectDesc,projectLink,projectGitLink}) => {
  return (
   <>
   <div className='custom-shadow rounded-md  overflow-hidden p-4 space-y-5 md:space-x-6 flex flex-col md:flex-row max-w-lg md:max-w-4xl  items-center '>
    <div className=" md:w-[50%] rounded-xl overflow-hidden md:h-[21rem] flex items-center" >
        <img src={projectImg} alt="" />
        {/* <img src="/ecommerce.png" alt="" /> */}
    </div>
    <div className="space-y-3 md:w-[55%]">
        <h1 className='text-3xl font-medium'>{projectName}</h1>
        <p className='md:text-base text-base'>{projectDesc}</p>
        <div className=' flex text-xl space-x-3'>
            <a target="_blank" href={projectLink}>
                <button className=' bg-gray-800 text-white py-1 px-2 rounded-lg text-lg flex items-center hover:bg-white hover:hover:text-blue-600 hover:shadow-xl transition-all ease-in-out'>
                visit<i className="ml-2 text-sm  fa fa-external-link  mr-2"></i>
                </button>
            </a>
            <a target="_blank" href={projectGitLink}>
                <button className='bg-gray-800 text-white py-1 px-2 rounded-lg text-lg flex items-center hover:bg-white hover:hover:text-blue-600 hover:shadow-xl transition-all ease-in-out'>
                Github<i className="ml-2 text-lg  fa-brands fa-github  mr-2"></i>
                </button>
            </a>
           
         

        </div>
    </div>
   </div>
   </>
  )
}

export default Projectcards