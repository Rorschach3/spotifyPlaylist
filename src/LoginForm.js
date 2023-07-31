import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './LoginForm.css';
// import { authUser } from "./context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const auth = authUser();
  // const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the login function from your AuthContext passing the email and password
      await auth.login(email, password);
      history.push("/dashboard"); // Redirect to the dashboard page after successful login
    } catch (error) {
      setError("Invalid email or password"); // Handle login error
    }
  };

  return (
    <>
    <h1>Login to Spotify Playlist</h1>
    <div className="login-container">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success" type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
