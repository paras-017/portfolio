import React from 'react'

const Contact = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-white overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8">
        <div className="md:max-w-md">
          <div className="flex items-center justify-center mb-8 w-20 h-20 rounded-xl" >
           
          </div>
          <h3 className="mb-6 text-3xl font-semibold">&ldquo;Basko is a total game-changer! Streamlined workflow &amp; productivity. Highly recommend!&rdquo;</h3>
          <h4 className="font-semibold tracking-tight mb-1">Annabelle Porter</h4>
          <span>Co-Founder, Marin-Jones Inc.</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <form className="flex flex-wrap -m-3" action="#">
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-1" type="text" placeholder="First Name"/>
            </label>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-2" type="text" placeholder="Last Name"/>
            </label>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-3" type="text" placeholder="Email Address"/>
            </label>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <label className="block">
              <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-4" type="text" placeholder="Phone Number"/>
            </label>
          </div>
          <div className="w-full p-3">
            <label className="block">
              <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-5" type="text" placeholder="Company (Optional)"/>
            </label>
          </div>
          <div className="w-full p-3">
            <a className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Try 14 Days Free Trial</a>
            <span className="text-sm text-gray-600 tracking-tight">* We never share user details with third parties, period.</span>
          </div>
        </form>
      </div>
    </div>
  </div>
   </section>
  )
}

export default Contact