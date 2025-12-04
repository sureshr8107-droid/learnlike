import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "owner" && pass === "1234") {
      navigate("/employees");
    } else {
      setError("Invalid login!");
    }
  };

  return (
    <div className="container">
      <h2>Company Owner Login</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p className="error">{error}</p>
    </div>
  );
}

export default Login;
