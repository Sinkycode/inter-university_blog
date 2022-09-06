import React from 'react'

const Register = () => {
  return (
    <div className='register'>

      <label htmlFor="username">Register</label>
      <form>
        <input type="text" placeholder="Username" id="username" />
        <input type="email" placeholder="Email" id="email" />
        <input type="tel" placeholder="Phone Number" id="phoneNumber" />
      </form>
    </div>
  )
}

export default Register