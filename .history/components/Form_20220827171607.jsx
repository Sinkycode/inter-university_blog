import React from 'react'
import { useForm, FormContext } from "react-hook-form";

export const Form = () => {
  const { handleSubmit, ...methods } = useForm();

  const onSubmit = (values) => console.log(values);
  return (
    <div>Form</div>
  )
}
