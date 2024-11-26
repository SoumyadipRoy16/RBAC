"use client";

import { useEffect, useState } from "react";

export default function UserDashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/auth/login";
    } else {
      fetch("/api/user-data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setMessage("Welcome, User! Enjoy your personalized experience.");
          } else {
            window.location.href = "/auth/login";
          }
        })
        .catch(() => {
          window.location.href = "/auth/login";
        });
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>User Dashboard</h1>
      <p>{message}</p>
    </div>
  );
}
