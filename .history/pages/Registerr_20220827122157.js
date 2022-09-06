import React from 'react'

const Registerr = () => {
  return (
    <div className="mt-8">
        <button type="button" onClick={handleRegisterrSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Registerr</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Registerr submitted for review</span>}
      </div>
  )
}

export default Registerr