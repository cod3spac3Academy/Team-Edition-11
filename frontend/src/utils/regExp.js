//Starts with lower or uppercase letter, followed by l/u case letter, number, hyphon(-) or underscore(_) // {from 4 to 24 char}
export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

//Regex for validate Email
export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Regex for validate password
//8 to 24 characters .Must include uppercase and lowercase letters, a number and at least one special character.(!@#$%)
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
