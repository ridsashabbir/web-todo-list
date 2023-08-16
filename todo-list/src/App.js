import "./App.css";
// import { useState } from "react";
import Navbar from "./Components/Navbar";
import Todolist from "./Components/Todolist";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Footer from "./Components/Footer";
import LoginSignup from "./Components/LoginSignup";

function App() {
  return (
    <>
      <Navbar color="#461959" />

      <Routes>
        {/* <Route path="/navbar" element={} /> */}
        <Route path="/" element={<Todolist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
