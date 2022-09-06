import { useFormContext } from "react-hook-form";

export default function FormInput({ inputLabel, type: enumType, ...rest }) {
  const { register } = useFormContext();
  const { name } = rest;
  const type = enumType.toLowerCase();

  return (
    <div>
      {inputLabel && <label htmlFor={name}>{inputLabel || name}</label>}
      <input
        ref={register({ required: rest.required })}
        id={name}
        type={type}
        {...rest}
      />
    </div>
  );
}