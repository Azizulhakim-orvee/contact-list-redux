import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-left" hideProgressBar={true} autoClose={1000}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddContact />} />

        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
