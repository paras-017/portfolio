
const Hero = () => {
  return (
        <div className='relative flex items-center flex-col mx-auto '>
      {/* hero */}
      <div className=' flex items-center justify-center flex-col md:flex-row md:mt-10'>
          <div className="text-center md:text-left space-y-6 mt-6 p-6">
              <h1 className='text-3xl font-semibold'>Hi, I'm Paras Singh,<br/>Full-Stack Next Developer</h1>
              <p className='text-xl font-medium md:max-w-xl'>My passion is creating, and I find happiness in being a better me today than the me yesterday.</p>
          </div>
          <div>
              <img src="/carbon.png" alt="" className='w-full h-full max-h-96 ' />
          </div>
      </div>

      {/* About */}
      <div className='  flex items-center justify-center flex-col md:flex-row mt-10 md:mt-24 gap-5 mx-3   pb-20'>
        <div className="about-img hero-img">
        </div>
        <div className="about-content space-y-5 md:w-[770px] md:ml-10 ">
           <h1 className='text-blue-400 font-semibold text-4xl text-center md:text-left '>About Me</h1>
           <p className='text-xl font-medium  md:w-[45rem]' >Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit and listening to podcasts.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero