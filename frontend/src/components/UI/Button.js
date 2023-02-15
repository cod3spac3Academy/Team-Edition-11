import classes from './modulesUI/Button.module.css'

const Button = ({buttonTxt, className= "form-btn", onClick, disabled}) => {
  return (
    <button className={classes[className]} onClick={onClick} disabled={disabled}>{buttonTxt}</button>
  )
}

export default Button