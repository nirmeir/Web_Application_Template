import React, { useState } from "react";
import "./AuthForm.css"; // Importing the CSS for styling

interface AuthFormProps {
  isSignup: boolean;
  onAuth: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignup, onAuth }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onAuth(email, password); // Handle the auth (login or signup)
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {isSignup && (
          <div className="input-container">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
        )}
        <button type="submit" className="auth-btn">
          {isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
