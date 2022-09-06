import React from 'react'

const Register = () => {
  return (
    <div className='register'>

      <h2>Register</h2>
      <form>
        <label htmlFor="username">
          <input type="text" placeholder="Username" id="username" />
        </label>
        <input type="email" placeholder="Email" id="email" />
        <input type="tel" placeholder="Phone Number" id="phoneNumber" />
      </form>
    </div>
  )
}

export default Register