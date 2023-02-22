import { createContext, useState } from "react";

export const LoginModalContext = createContext(null);

const LoginModalProvider = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [onRegister, setOnRegister] = useState(false);
  const [onLogin, setOnLogin] = useState(false);
  return (
    <LoginModalContext.Provider
      value={{
        openLoginModal,
        setOpenLoginModal,
        onRegister,
        setOnRegister,
        onLogin,
        setOnLogin,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
