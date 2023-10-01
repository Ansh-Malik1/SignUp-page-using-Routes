import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn , setIsLoggedIn ] = useState(false)
  return(
    <div  className=" w-screen h-screen bg-richblack-900">
    <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute  isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
      }/>
    </Routes>
    </div>
  );
}

export default App;
