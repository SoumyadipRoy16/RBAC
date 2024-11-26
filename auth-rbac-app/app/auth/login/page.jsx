"use client";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",  // Ensure POST method is being used
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const data = await res.json();
      const { token, role } = data; // Get the role from the response

      localStorage.setItem("token", token); // Store the token
      setMessage("Login successful! Redirecting...");

      // Redirect based on the role
      if (role === "Admin") {
        setTimeout(() => (window.location.href = "/dashboard/admin"), 1000);
      } else if (role === "Moderator") {
        setTimeout(() => (window.location.href = "/dashboard/moderator"), 1000);
      } else {
        setTimeout(() => (window.location.href = "/dashboard/user"), 1000);
      }
    } else {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
