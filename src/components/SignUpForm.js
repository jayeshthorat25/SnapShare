import React, { useState } from "react";

function SignUpForm({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send sign up request to backend
    alert("Sign up submitted: " + username);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default SignUpForm;
