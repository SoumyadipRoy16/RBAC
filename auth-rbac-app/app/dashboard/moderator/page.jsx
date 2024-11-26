"use client";

import { useEffect, useState } from "react";

export default function ModeratorDashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/auth/login";
    } else {
      fetch("/api/moderator-data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setMessage("Welcome, Moderator! You can moderate user content.");
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
      <h1>Moderator Dashboard</h1>
      <p>{message}</p>
    </div>
  );
}
