import React, { useState } from "react";
import AuthForm from "./Components/AuthForm/AuthForm";

const App: React.FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const handleAuth = (email: string, password: string) => {
    if (isSignup) {
      // Handle signup logic (e.g., sending a POST request to the server)
      console.log("Sign Up:", email, password);
    } else {
      // Handle login logic (e.g., sending a POST request to the server)
      console.log("Log In:", email, password);
    }
  };

  const toggleAuthMode = () => setIsSignup((prevMode) => !prevMode);

  return (
    <div className="app-container">
      <AuthForm isSignup={isSignup} onAuth={handleAuth} />
      <div className="toggle-container">
        <span>{isSignup ? "Already have an account?" : "Don't have an account?"}</span>
        <button onClick={toggleAuthMode} className="toggle-btn">
          {isSignup ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default App;
