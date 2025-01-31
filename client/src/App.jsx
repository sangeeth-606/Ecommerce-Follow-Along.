import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import ProductForm from "./pages/ProductForm";


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<ProductForm />}/>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>   
    </BrowserRouter>
    
    </>
  );
}

export default App;
