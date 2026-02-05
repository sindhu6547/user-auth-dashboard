# User Authentication Dashboard

A full-stack **User Authentication Dashboard** built with a modern frontend and backend architecture.  
This project supports user registration, login, protected routes, and a dashboard interface, following best practices for security and scalability.


## 📌 Project Overview

This application demonstrates how a real-world authentication system works using a separate **frontend** and **backend**.

Users can:
- Register with valid credentials
- Log in securely
- Access protected dashboard routes
- Log out safely

The project is structured to reflect **industry-standard folder organization**, making it suitable for learning, assessments, and interviews.


## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv


## 📂 Folder Structure
```
user-auth-dashboard/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```
## ✨ Features

- User Signup & Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected backend routes
- Frontend route protection
- Clean UI with Tailwind CSS
- Environment variable security
- Scalable folder structure


## ⚙️ Environment Variables

Create a `.env` file inside the **Backend** folder.
## ⚙️ Environment Variables

Create a `.env` file inside the **Backend** folder and add the following:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
⚠️ **Note:**  
`.env` files are ignored by Git for security reasons.  
Use `.env.example` to share variable names safely.


## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sindhu6547/user-auth-dashboard.git
cd user-auth-dashboard
```
### 2️⃣ Install Backend Dependencies

```bash
cd Backend
npm install
```
### ▶️ Start Backend Server

```bash
npm start
```
Backend will run on:

```text
http://localhost:5000
```
### 3️⃣ Install Frontend Dependencies

Open a new terminal and run:

```bash
cd Frontend
npm install
```
### ▶️ Start Frontend Application

```bash
npm run dev
```
Frontend will run on:

```text
http://localhost:5173
```
## 🔐 Authentication Flow

- User registers → password is hashed
- User logs in → JWT token is generated
- Token is stored securely on the frontend
- Protected routes validate JWT
- Unauthorized users are blocked



## 🧪 API Endpoints (Sample)

| Method | Endpoint           | Description       |
|------:|--------------------|-------------------|
| POST  | /api/auth/signup  | Register user     |
| POST  | /api/auth/login   | Login user        |
| GET   | /api/user         | Protected route   |



## 🧑‍💻 Author

**Kalagotla Sindhuja**  
📧 Email: kalagotlasindhuja06@gmail.com  
🔗 GitHub: https://github.com/sindhu6547  
💼 LinkedIn: https://www.linkedin.com/in/kalagotla-sindhuja/


## 📄 License

This project is for **learning and educational purposes**.


## ⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!
