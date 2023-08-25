import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Hero = () => {
  return (
        <div className='relative flex items-center flex-col mx-auto '>
      {/* hero */}
      <div className=' flex items-center justify-center flex-col md:flex-row md:mt-10'>
          <div className="text-center md:text-left space-y-4 mt-6 p-6">
              <h1 className='text-3xl font-medim'>Hi, I'm <span className='text-blue-600 font-semibold'>Paras Singh</span>,<br/>Full-Stack Next Developer</h1>
              <p className='text-xl font-normal md:max-w-xl'>My passion is creating, and I find happiness in being a better me today than the me yesterday.</p>
              <div className='flex space-x-2 justify-center md:justify-start'>
                <a target='_blank' href="https://github.com/paras-017">
                  <FaGithubSquare className='text-2xl hover:text-blue-600 transition-all ease-in-out'/>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/paras018/">
                  <FaLinkedin className='text-2xl hover:text-blue-600 transition-all ease-in-out'/>
                </a>
              </div>
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
           <h1 className='text-blue-600 font-semibold text-4xl text-center md:text-left '>About Me</h1>
           <p className='text-xl font-normal  md:w-[45rem]' >Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit and listening to podcasts.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero