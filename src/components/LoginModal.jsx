import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function LoginModal() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [error, setError] = useState("");

  // ✅ Google login
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/"); // redirect home after login
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // ✅ Email/Password login or signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/"); // redirect home
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {isLogin ? "Login to your account" : "Sign Up"}
      </h2>

      {/* Google Login */}
      <button
        onClick={loginWithGoogle}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Continue with Google
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* Email / Password */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email / Mobile</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ textAlign: "right", marginBottom: "15px" }}>
          <a href="#" style={{ fontSize: "0.9rem" }}>Forget Password?</a>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#FF7F50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "15px", fontSize: "0.9rem" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
          }}
        >
          {isLogin ? "Get started" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default LoginModal;
