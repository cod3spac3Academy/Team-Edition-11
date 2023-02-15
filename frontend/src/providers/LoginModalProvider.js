import { createContext, useState } from "react";

export const LoginModalContext = createContext(null);

const LoginModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [onRegister, setOnRegister] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        onRegister,
        setOnRegister,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
