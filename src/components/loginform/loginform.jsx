import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css";
import { FaUserCircle, FaLock } from "react-icons/fa";
import loginBg from "../../assets/background.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy validation (Replace with actual authentication)
    if (username && password ) {
      navigate("/home"); // Redirect to Landing Page
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    
    <div className='wrapper' style={{ backgroundImage: `url(${loginBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="loginpage">

      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={ e => setUsername(e.target.value)}
            required
          />
          <FaUserCircle className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={ e => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>

      </div>
      
      </div>
      
  
  );
};

export default Login;
