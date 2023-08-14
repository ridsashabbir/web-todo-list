import "./App.css";
import Navbar from "./Components/Navbar";
import Todolist from "./Components/Todolist";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/navbar" element={} /> */}
        <Route path="/" element={<Todolist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
