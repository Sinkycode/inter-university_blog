import React from 'react'

const Register = () => {
  function sendEmail() {
    mail.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }
  return (
    <div className='register'>

      <form>
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