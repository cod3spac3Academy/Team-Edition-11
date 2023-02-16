import { createContext, useState } from "react";

export const LoginModalContext = createContext(null);

const LoginModalProvider = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [onRegister, setOnRegister] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{
        openLoginModal,
        setOpenLoginModal,
        onRegister,
        setOnRegister,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
