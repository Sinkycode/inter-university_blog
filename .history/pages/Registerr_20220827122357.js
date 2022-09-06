import React from 'react'

const Registerr = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input 
            ref={storeDataEl} type="checkbox" 
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