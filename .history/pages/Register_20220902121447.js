import React from 'react'

const Register = () => {
  return (
    <div className='register'>

      <form>
        <input type="text" placeholder="Username" id="username" />
        <input type="email" placeholder="Email" id="email" />
        <input type="number" placeholder="Phone Number" id="phoneNumber" />
      </form>
    </div>
  )
}

export default Register