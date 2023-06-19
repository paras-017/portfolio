import Link from 'next/link'
import React from 'react'

const Projectcards = () => {
  return (
   <>
   <div className='shadow-md rounded-md  overflow-hidden p-4 space-y-5 md:space-x-6 flex flex-col md:flex-row max-w-lg md:max-w-4xl  items-center '>
    <div className=" md:w-[50%] rounded-xl overflow-hidden md:h-[21rem]" >
        <img src="/AuthFlow.png" alt="" />
        {/* <img src="/ecommerce.png" alt="" /> */}
    </div>
    <div className="md:space-y-3 md:w-[55%]">
        <h1 className='text-3xl font-medium'>AuthFlow</h1>
        <p className='bgred text-lg '>AuthFlow is a powerful CRUD (Create, Read, Update, Delete) application with seamless Google authentication integration. It offers a streamlined and secure user experience, allowing users to authenticate using their Google credentials and access various features within the app. With AuthFlow, users can manage their data efficiently while enjoying the benefits of Google's robust authentication system.</p>
        <div className=' flex justify-between text-xl '>
           <div> <Link href='https://next-crud-auth-ecru.vercel.app/'><i className="fa-solid fa-link hover:text-blue-500  transition-all ease-in-out"></i></Link></div>
            <div><Link href='https://github.com/paras-017/next-crud-auth/tree/main'><i className="fa-brands fa-github hover:text-blue-500  transition-all ease-in-out"></i></Link></div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Projectcards