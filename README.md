# 💼 Mini LinkedIn-like Community Platform

A fully responsive, modern, and minimal LinkedIn-style social platform built as part of the Full Stack Development Internship challenge by **CIAAN Cyber Tech Pvt Ltd**.

## 🚀 Live Demo

**🔗 [Click here to view the live app](https://linkdinass.netlify.app/)**  

Demo User :- 
email :- test@gmail.com
password :- VISHALJHA

## 📂 GitHub Repository

**🔗 [GitHub Repo](https://github.com/ishal2024/Linkdin-Work/)**  




---

## 🛠 Tech Stack

### 🔹 Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- React Hook Form
- React Router DOM
- React Toastify
- React Spinners

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt
- Postman

---

## ✨ Features

### 🔐 Authentication
- Register and Login using email and password
- Secure authentication using JWT
- Passwords hashed with bcrypt

### 🏠 Home Feed
- Public feed displaying all posts
- Author name and timestamp for each post

### 📝 Posts
- Create new text-only posts
- View posts on home feed and profile

### 👤 Profile
- Profile with name, email, and bio
- View all posts by a specific user

### 💡 Extras
- Fully responsive and modern UI
- Toast notifications for actions
- Loading spinners for better user experience
- Logout functionality

---

## ⚙️ Setup Instructions

### 📦 Backend Setup

```bash
# Clone the repository
git clone https://github.com/your-username/mini-linkedin-clone.git

# Navigate to the backend directory
cd mini-linkedin-clone/backend

# Install dependencies
npm install

# Create a .env file in the backend directory with the following content:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Start the backend server
npm run dev

# Open a new terminal and navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev

cd mini-linkedin-clone/backend
npm install
