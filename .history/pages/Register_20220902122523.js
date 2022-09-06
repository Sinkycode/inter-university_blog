import React from 'react'

const Register = () => {
  return (
    <div className='register'>

      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" id="username" />
        <label htmlFor="email">Email </label>
          <input type="email" placeholder="Email" id="email" />
        <label htmlFor="phoneNumber">Phone Number </label>
          <input type="tel" placeholder="Phone Number" id="phoneNumber" />
      </form>
    </div>
  )
}

export default Register