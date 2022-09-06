import React from 'react'
import { useRef, useState, useEffect } from 'react'

const login = () => {
  const useRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // First UseEffect
  useEffect(() => {
    userRef.current.focus();
  }, [])
    
  // Second UseEffect
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])
  
  return (
    <section>
       <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    </section>
  )
}

export default login