# Authentication and Role-Based Access Control (RBAC)

## Overview

This is a full-stack application that implements user authentication and role-based access control (RBAC) using Next.js, MongoDB, and JWT (JSON Web Tokens). The application allows users to log in, with their roles (Admin, Moderator, or User) determining their access to specific dashboards.

## Features

- **User Authentication**: Secure login using email and password
- **Role-Based Access Control (RBAC)**: Differentiated dashboards for Admin, Moderator, and User roles
- **JWT Authentication**: Token-based secure authentication system
- **MongoDB Integration**: Robust user data and role management

## Technologies Used

- **Frontend**: Next.js (React framework)
- **Database**: MongoDB Atlas
- **Authentication**: 
  - JWT (JSON Web Tokens)
  - bcryptjs (Password hashing)
- **Environment Management**: dotenv

## Project Structure

```
auth-rbac-app/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.js
│   │   │   ├── register/
│   │   │   │   └── route.js
│   │   │   └── middleware.js
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.jsx
│   │   ├── register/
│   │   │   └── page.jsx
│   ├── dashboard/
│   │   ├── admin/
│   │   │   └── page.jsx
│   │   ├── moderator/
│   │   │   └── page.jsx
│   │   ├── user/
│   │   │   └── page.jsx
│   ├── layout.js
│   └── page.js
├── lib/
│   └── dbConnect.js
├── middleware/
│   └── verifyToken.js
├── models/
│   └── User.js
├── utils/
│   └── jwtUtils.js
├── .env.local
├── package.json
├── next.config.js
└── README.md
```

## Environment Variables

Create a `.env.local` file at the project root with the following variables:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rbac_auth?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
```

**Note**: Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/auth-rbac-app.git
cd auth-rbac-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create and configure the `.env.local` file with your MongoDB URI and JWT secret.

### 4. Run Development Server

```bash
npm run dev
```

## Accessing the Application

Open your browser and navigate to `http://localhost:3000`

## Key Components

- **`/app/api/auth/`**: Contains login and registration API routes
- **`/app/dashboard/`**: Role-specific dashboard pages
- **`/middleware/verifyToken.js`**: JWT token verification middleware
- **`/models/User.js`**: MongoDB user schema definition
- **`/utils/jwtUtils.js`**: JWT utility functions

## Security Considerations

- Passwords are hashed using bcryptjs
- JWT tokens are used for secure authentication
- Role-based access control prevents unauthorized dashboard access

## Contribution

Feel free to fork the repository and submit pull requests. Please ensure that you follow the existing code style and add appropriate tests for new features.

## License

[Insert your license information here]