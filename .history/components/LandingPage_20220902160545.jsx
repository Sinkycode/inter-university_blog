import React from 'react'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
    <div className="container">
      <div className="context md:container md:mx-auto">
        <h1>Welcome to Inter university blogging platform</h1>
        <p>This is an educational interactive blogging site, to start writing, updating and deleting posts;</p>
        <Link href='/Register'><a className='getStarted-btn inline-block bg-pink-600 px-7 py-4 my-4'>Register</a></Link>
        <Link 
          href='https://auth.graphcms.com/login?state=hKFo2SBDRklJLXJOWlI1ODFHX2l4aHM4bURvdHVDNnJzb0s0OKFupWxvZ2luo3RpZNkgVzIwQ1lFb3hJTDJnMFZLNVBjZWhxa0ptaHdzSnluaTCjY2lk2SA4VldTZHlVaHRaVDQzbkFpcHIyZmpLUmhqSm1wOHNZeQ&client=8VWSdyUhtZT43nAipr2fjKRhjJmp8sYy&protocol=oauth2&response_type=id_token&redirect_uri=https%3A%2F%2Fapp.hygraph.com%2Fauth&scope=openid%20https%3A%2F%2Fgraphcms.com%2FloginsCount&initial_screen=login&nonce=d91bx-7PJQrUF3svBwfTPziubExOUAZO&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xOS4wIn0%3D'>

            <a className='getStarted-btn inline-block ml-2 bg-blue-600 px-7 py-4 my-4'>Login</a>
          </Link>
      </div>
    </div>
  </div>
  )
}

export default LandingPage