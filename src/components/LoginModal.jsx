import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  linkWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase"; // make sure db is your Firestore instance
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";

function LoginModal() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 🔹 password toggle
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [error, setError] = useState("");

  // 🔹 Google login + account linking
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = auth.currentUser;

      if (user) {
        try {
          const methods = await auth.fetchSignInMethodsForEmail(user.email);
          if (methods.includes("password") && !methods.includes("google.com")) {
            await linkWithPopup(user, provider);
          }
        } catch (err) {
          console.log("Link error:", err.message);
        }

        await saveUserToFirestore(user.uid, user.email, user.displayName);
      }

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // 🔹 Email/Password login or signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user;
      if (isLogin) {
        const res = await signInWithEmailAndPassword(auth, email, password);
        user = res.user;
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        user = res.user;
      }

      if (user) {
        await saveUserToFirestore(user.uid, user.email, user.displayName);
      }

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // 🔹 Forget Password
  const handleForgetPassword = async () => {
    if (!email) {
      setError("Please enter your email first");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // 🔹 Save user to Firestore (avoid duplicates)
  const saveUserToFirestore = async (uid, email, name) => {
    if (!uid) return;
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        email,
        name: name || "",
        createdAt: new Date(),
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
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
          cursor: "pointer",
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
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px", position: "relative" }}>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"} // 🔹 toggle type
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px 30px 8px 8px", // leave space for eye icon
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {/* 🔹 Eye icon */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "38px",
              cursor: "pointer",
              userSelect: "none",
              fontSize: "0.9rem",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <div style={{ textAlign: "right", marginBottom: "15px" }}>
          <a
            href="#"
            style={{ fontSize: "0.9rem" }}
            onClick={(e) => {
              e.preventDefault();
              handleForgetPassword();
            }}
          >
            Forget Password?
          </a>
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
            cursor: "pointer",
          }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "0.9rem",
        }}
      >
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
