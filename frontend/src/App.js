import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { useEffect } from "react";
import ApiRequest from "./services/apiRequest";
import LoginModalProvider from "./providers/LoginModalProvider";
import HeaderProvisional from "./components/HeaderProvisional";
function App() {
  //ckeck if there is a remembered user and log him in if there is, using refresh token for authentication and recieve new access token
  useEffect(() => {
    const handleRememberedUser = async () => {
      if (!localStorage.getItem("refreshToken")) return;

      const response = await ApiRequest.refresh(
        localStorage.getItem("refreshToken")
      );
      if (!response.accessToken) return;

      if (response.accessToken) {
        sessionStorage.setItem("accessToken", response.accessToken);
        sessionStorage.setItem("userId", response.id);
      }
    };
    (async () => handleRememberedUser())();
  }, []);
  return (
    <Router>
      <LoginModalProvider>
        <HeaderProvisional />
      </LoginModalProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
