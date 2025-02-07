import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showLoginOption, setShowLoginOption] = useState(false); // State for showing login option
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    console.log("Form data being sent:", formData); // Log the form data here

    try {
      const { data } = await axios.post("https://zerodha-replica-backend.onrender.com/signup", formData, {
        headers: { "Content-Type": "application/json" }, // Ensure Content-Type is set
      });
      console.log("Response from server:", data); // Log the response from the server
      localStorage.setItem("token", data.token); // Store the token
      window.location.replace("https://main.d2zn20lh0dbosr.amplifyapp.com");
    } catch (err) {
      console.error("Error occurred:", err.response?.data || err); // Log the error details
      if (err.response?.data?.message === "User already exists") {
        setError("User already exists. Please login.");
        setShowLoginOption(true); // Show login option
      } else {
        setError(err.response?.data?.message || "Signup failed"); // Set error message
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Sign Up</h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        {showLoginOption && (
          <div className="text-center mt-3">
            <p>Already have an account?</p>
            <button className="btn btn-link" onClick={handleLoginRedirect}>Login here</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
