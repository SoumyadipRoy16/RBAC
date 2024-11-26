export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>RBAC System</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      </head>
      <body>
        <nav style={{ textAlign: "center", margin: "20px 0" }}>
          <a href="/" style={{ margin: "0 15px" }}>Home</a>
          <a href="/auth/login" style={{ margin: "0 15px" }}>Login</a>
          <a href="/auth/register" style={{ margin: "0 15px" }}>Register</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
