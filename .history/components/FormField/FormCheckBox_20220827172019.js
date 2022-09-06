import { useFormContext } from "react-hook-form";

export default function FormCheckbox({ checkboxLabel, ...rest }) {
  const { register } = useFormContext();
  const { name } = rest;

  return (
    <div>
      <label htmlFor={name}>
        <input
          ref={register({ required: rest.required })}
          id={name}
          type="checkbox"
          {...rest}
        />
        {checkboxLabel || name}
      </label>
    </div>
  );
}