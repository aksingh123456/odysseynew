import { useState } from "react";
import "./AuthModal.css";

const LoginModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <span className="close-btn" onClick={onClose}>×</span>

        {!isSignup ? (
          /* ================= LOGIN ================= */
          <>
            <h2>Login to your account</h2>

            <input placeholder="Admin Login" />
            <input placeholder="Email Address / Mobile" />
            <input type="password" placeholder="Password" />

            <p className="forgot">Forgot Password?</p>

            <button className="auth-btn">Login</button>

            <p className="switch">
              Don’t have an account?
              <span onClick={() => setIsSignup(true)}> Get started</span>
            </p>
          </>
        ) : (
          /* ================= SIGNUP ================= */
          <>
            <h2>Create Account</h2>

            <div className="row">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>

            <input placeholder="Business Name" />
            <input placeholder="Email Address" />
            <input placeholder="Phone (with country code)" />
            <input placeholder="City" />
            <input placeholder="Zip / Postal Code" />

            <p className="terms">
              By proceeding, you agree to our
              <span> terms of service</span> & <span>privacy policy</span>
            </p>

            <button className="auth-btn">Register</button>

            <p className="switch">
              Already have an account?
              <span onClick={() => setIsSignup(false)}> Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
