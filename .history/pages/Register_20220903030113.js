import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Register = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_8mqv0t7';
   const publicKey = 'QCRwjsFPcbyAB_R5J';

    emailjs.sendForm(
      serviceID, 
      templateID, 
      form.current, 
      publicKey
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
            name="first_name" 
            required
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            name="last_name" 
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
            name="phone_number" 
            required
          />
          <button type="submit">Continue Registration</button>
      </form>
    </div>
  )
}

export default Register