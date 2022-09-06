import React from 'react'
import emailjs from '@emailjs';


const Register = () => {
  
  return (
    <div className='register'>

      <form onSubmit={{sendEmail}} >
          <h2 className='title'>REGISTER</h2>
          <input type="text" placeholder="Username" id="username" />
          <input type="email" placeholder="Email" id="email" />
          <input type="tel" placeholder="Phone Number" id="phoneNumber" />
          <button>Send</button>
      </form>
    </div>
  )
}

export default Register