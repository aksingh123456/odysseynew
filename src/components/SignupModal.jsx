const SignupModal = ({ onClose, openLogin }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>

        <h2>Create Account</h2>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Phone" />
        <input type="password" placeholder="Password" />

        <button className="signup-btn">Register</button>

        <p>
          Already have an account?
          <span className="link" onClick={openLogin}>
            {" "}Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
