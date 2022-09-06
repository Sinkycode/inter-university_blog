import React from 'react'
// import emailjs from '@emailjs-com';


const Register = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <div className='register'>

      <form onSubmit={sendEmail} >
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