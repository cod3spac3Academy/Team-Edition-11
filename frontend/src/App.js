import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";

function App() {
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
