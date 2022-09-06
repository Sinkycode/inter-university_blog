import React from 'react'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
    <div className="container">
      <div className="context md:container md:mx-auto">
        <h1>Welcome to Inter university blogging platform</h1>
        <p>This is an educational interactive blogging site, to start writing, updating and deleting posts;</p>
        <Link href='/RegisterForm'><a className='getStarted-btn inline-block bg-pink-600 px-7 py-4 my-4'>Register</a></Link>
      </div>
    </div>
  </div>
  )
}

export default LandingPage