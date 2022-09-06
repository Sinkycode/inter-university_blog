import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Register = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'gmail', 
      'template_8mqv0t7', 
      form.current, 
      'QCRwjsFPcbyAB_R5J'
      ).then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
  return (
    <div className='register'>

      <form ref={form} onSubmit={sendEmail} >
          <h2 className='title'>REGISTER</h2>
          <input 
            type="text" 
            placeholder="First Name" 
            name="firstName" 
            required
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            name="lastName" 
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            name="phoneNumber" 
            required
          />
          <button type="submit">Continue Registration</button>
      </form>
    </div>
  )
}

export default Register