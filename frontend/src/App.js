import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { useEffect } from "react";
import ApiRequest from "./services/apiRequest";

function App() {
  useEffect(() => {
    const handleRememberedUser = async () => {
      if (!localStorage.getItem("refreshToken")) return;

      const response = await ApiRequest.refresh(
        localStorage.getItem("refreshToken")
      );
      if (!response.accessToken) return;
      console.log(response);
      if (response.accessToken) {
        console.log(response);
        sessionStorage.setItem("accessToken", response.accessToken);
        sessionStorage.setItem("userId", response.id);
      }
    };
    (async () => handleRememberedUser())();
  }, []);
  return (
    <HomePage />

    // <Router>
    //   {/* Header aqui */}

    //   <Routes>
    //     <Route path='/' element={<HomePage />} />
    //   </Routes>
    // </Router>
  );
}
export default App;
