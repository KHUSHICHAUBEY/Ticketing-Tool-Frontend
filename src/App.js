import React, { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
//import TicketCreatePage from "./Pages/TicketCreatePage"; 
import "./App.css";
import TicketingPage from "./Pages/TicketingPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TicketCreatePage from "./Pages/TicketCreatePage";
import Register from "./Components/Register/Register";

function App() {
  const [isLogin, setIsLogin]=useState(true);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={setUser} setIsLogin={setIsLogin}/>} />
            <Route path="/register" element={<RegisterPage onRegister={setUser} />} />
            <Route path="/create-ticket" element={<TicketCreatePage  onCreateTicket={setUser}/>} />
            <Route path="/ticket" element={<TicketingPage/>} />
            {user ? (
              <Route path="/ticket" element={<TicketingPage />} /> 
            ) : (
              <Route path="/login" element={<Navigate to="/login" />} />
            )}
            <Route
              path="/"
              element={
                isLogin ? (
                  <LoginPage onLogin={setUser} />
                ) : (
                  <RegisterPage onRegister={setUser} />
                )
              }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
