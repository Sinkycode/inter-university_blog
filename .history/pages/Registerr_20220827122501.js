import React from 'react'

const Registerr = () => {
  return (
    <>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
          placeholder="Name" 
          name="name" />
        <input 
         type="email"
         className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
         placeholder="Email" 
         name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input 
            type="checkbox" 
            id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      <div className="mt-8">
          <button type="button" className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Registerr</button><span className="text-xl float-right font-semibold mt-3 text-green-500">Registerr submitted for review</span>
        </div>
    </>
  )
}

export default Registerr