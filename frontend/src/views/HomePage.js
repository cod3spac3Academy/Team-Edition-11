import Home from "../components/Home";
import LoginModalProvider from "../providers/LoginModalProvider";
const HomePage = () => {
  return (
    <LoginModalProvider>
      <Home />
    </LoginModalProvider>
  );
};

export default HomePage;
