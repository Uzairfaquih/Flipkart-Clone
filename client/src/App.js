import "./App.css";
import Navbar from "./components/header/Navbar";
import Maincomp from "./components/home/Maincomp";
import NewNav from "./components/newnavbar/NewNav";
import Footer from "./components/footer/Footer";
import Signup from "./components/signin_signup/SignUp";
import SignIn from "./components/signin_signup/SignIn";
import Cart from "./components/cart/Cart";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <NewNav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
