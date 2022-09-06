import React from 'react'

const Register = () => {
  return (
    <div className='register'>

      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username
          <input type="text" placeholder="Username" id="username" />
        </label>
        <label htmlFor="email">Email 
          <input type="email" placeholder="Email" id="email" />
        </label>
        <label htmlFor="email">Email 
          <input type="tel" placeholder="Phone Number" id="phoneNumber" />
        </label>
      </form>
    </div>
  )
}

export default Register