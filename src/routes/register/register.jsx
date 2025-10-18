import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);
    
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Attempting registration with:", { username, email });
      console.log("API base URL:", "http://localhost:8800/api");
      console.log("Full URL:", "http://localhost:8800/api/auth/register");
      
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      console.log("Registration successful:", res.data);
      setSuccess("✅ Account created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Registration error details:", err);
      console.error("Error response:", err.response);
      console.error("Error message:", err.message);
      console.error("Error code:", err.code);
      
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message === "Network Error") {
        setError("Cannot connect to server. Please ensure the API server is running on port 8800.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          
          <input 
            name="username" 
            type="text" 
            placeholder="Username" 
            required
            minLength="3"
            disabled={isLoading}
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required
            disabled={isLoading}
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Password (min 6 characters)" 
            required
            minLength="6"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Register"}
          </button>
          {error && <span className="error">{error}</span>}
          {success && <span className="success">{success}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
