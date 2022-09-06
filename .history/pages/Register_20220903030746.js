import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const Register = () => {

  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
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
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }, (error) => {
        console.log(error.message)
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
          {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </form>
    </div>
  )
}

export default Register