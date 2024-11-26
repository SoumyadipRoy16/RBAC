export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to the RBAC System</h1>
      <p>
        Please <a href="/auth/login">Login</a> or <a href="/auth/register">Register</a> to continue.
      </p>
    </div>
  );
}