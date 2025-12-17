import React, { useState } from "react";

export default function Login() {
  // Single-field controlled input example
  const [username, setUsername] = useState("");

  // Multi-field form in a single state object
  const [formData, setFormData] = useState({ username: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Login submitted:", formData);
    setFormData({ username: "", password: "" });
  }

  return (
    <div className="login">
      <h2>Login (single input demo)</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <p>Current username: {username}</p>

      <hr />

      <h2>Login (full form)</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Form data: {JSON.stringify(formData)}</p>
    </div>
  );
}
