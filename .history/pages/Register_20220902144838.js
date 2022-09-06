import React from 'react'
import emailjs from 'emailjs-com';


const Register = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_8mqv0t7', e.target, 'QCRwjsFPcbyAB_R5J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
  return (
    <div className='register'>

      <form onSubmit={sendEmail} >
          <h2 className='title'>REGISTER</h2>
          <input type="text" placeholder="First Name" name="firstName" />
          <input type="text" placeholder="Last Name" name="lastName" />
          <input type="email" placeholder="Email" name="email" />
          <input type="tel" placeholder="Phone Number" name="phoneNumber" autoComplete=false />
          <button type="submit">Continue Registeration</button>
      </form>
    </div>
  )
}

export default Register