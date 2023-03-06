/**
 * @fileoverview This is a reusable input component
 * @author Alina Dorosh
 * @param {string} className - Class name to be applied to the input
 * @param {boolean} required - Boolean to make the input required
 * @param {string} type - Type of the input
 * @param {string} placeholder - Placeholder to be displayed in the input
 * @param {function} onChange - Function to be executed when the input value changes
 * @param {boolean} ariaInvalid - Boolean to make the input aria-invalid for accessibility
 * @param {function} onFocus - Function to be executed when the input is focused
 * @param {function} onBlur - Function to be executed when the input is blurred
 * @param {string} value - Value to be displayed in the input
 * @param {string} ariaDescribedby - Id of the element to be described by the input for accessibility
 * @param {string} id - Id of the input
 * @param {object} reference - Reference to the input
 */


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
  reference,
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
      ref={reference}
    />
  );
};

export default Input;
