import React from 'react'
import { useRef, useState, useEffect } from 'react'

const login = () => {
  const useRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  
  return (
    <div>login</div>
  )
}

export default login