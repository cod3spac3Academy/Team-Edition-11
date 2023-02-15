import classes from "./modulesUI/Input.module.css";

const Input = ({
  className = "form-input",
  required = true,
  type,
  placeholder,
  onChange,
  ariaInvalid = false,
  onFocus,
  onBlur,
  value,
  ariaDescribedby,
  id,
}) => {
  return (
    <input
      type={type}
      className={classes[className]}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete='off'
      required={required}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedby}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      id={id}
    />
  );
};

export default Input;
