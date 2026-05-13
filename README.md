# MERN Chat Application | Real-Time Full Stack Messaging Platform

A scalable real-time chat application built using the MERN stack with WebSocket-based communication. This project demonstrates full-stack engineering capabilities including frontend architecture, backend API development, authentication, database integration, and real-time event handling.

Designed to showcase practical software engineering skills relevant to modern product companies and frontend/full-stack engineering roles.

---

## 🚀 Project Overview

This application enables users to communicate in real time through a modern chat interface with secure authentication and persistent messaging.

The project was built to demonstrate:

* Real-time application architecture
* Full-stack MERN development
* Authentication and authorization
* Socket-based communication
* API integration
* State-driven frontend development
* Responsive UI engineering

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* CSS / TailwindCSS
* Axios

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB
* Mongoose ODM

### Authentication & Security

* JWT Authentication
* bcrypt Password Hashing

---

## ✨ Key Features

* Real-time one-to-one messaging
* Secure user authentication
* Persistent message storage
* Online user connectivity
* Responsive chat interface
* RESTful backend APIs
* Socket.IO event-driven architecture
* Scalable MERN project structure

---

## 🧠 Engineering Highlights

### Frontend Engineering

* Built reusable React components for chat UI
* Managed application state for messaging workflows
* Implemented responsive layouts for multiple screen sizes
* Integrated API and socket communication seamlessly

### Backend Engineering

* Developed REST APIs using Express.js
* Implemented JWT-based authentication flow
* Managed MongoDB schemas and database operations
* Handled real-time communication using Socket.IO

### System Design Concepts

* Client-server real-time architecture
* Persistent chat storage
* Stateless authentication using JWT
* Event-based communication model

---

## 📂 Repository Structure

```bash
MERN-CHAT-APP/
│
├── client/                 # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js backend server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── socket/
│
├── package.json
└── README.md
```

---

## ⚙️ Local Development Setup

### Clone Repository

```bash
git clone https://github.com/RitikRajpoot/MERN-CHAT-APP.git
cd MERN-CHAT-APP
```

---

### Install Dependencies

#### Backend

```bash
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend/root directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
npm run server
```

### Start Frontend

```bash
cd client
npm start
```

### Run Full Stack Concurrently

```bash
npm run dev
```

---

## 📡 Core API Endpoints

### Authentication APIs

| Method | Endpoint             | Purpose                    |
| ------ | -------------------- | -------------------------- |
| POST   | `/api/auth/register` | Register a new user        |
| POST   | `/api/auth/login`    | Authenticate existing user |

### Messaging APIs

| Method | Endpoint            | Purpose               |
| ------ | ------------------- | --------------------- |
| GET    | `/api/messages/:id` | Retrieve chat history |
| POST   | `/api/messages`     | Send message          |

---

## 🔄 Real-Time Socket Events

| Event            | Description              |
| ---------------- | ------------------------ |
| `connection`     | User socket connection   |
| `sendMessage`    | Send chat message        |
| `receiveMessage` | Receive incoming message |
| `disconnect`     | Handle user disconnect   |

---

## 📈 Skills Demonstrated

This project highlights practical experience in:

* Full Stack Development
* React.js Application Architecture
* REST API Development
* Real-Time Systems
* WebSocket Communication
* Authentication & Authorization
* MongoDB Data Modeling
* State Management
* Responsive UI Development
* Client-Server Architecture

---

## 🚀 Potential Enhancements

* Group Chat Support
* Typing Indicators
* Message Read Receipts
* Media/File Uploads
* Push Notifications
* Voice & Video Calling
* End-to-End Encryption
* Deployment with Docker & CI/CD

---

## 👨‍💻 Developer

**Ritik Singh**

Frontend Engineer with experience building scalable web applications using React, JavaScript, and modern frontend tooling.

GitHub:
[RitikRajpoot GitHub Profile](https://github.com/RitikRajpoot?utm_source=chatgpt.com)

---

## ⭐ Why This Project Matters

This project demonstrates the ability to build production-style applications involving:

* End-to-end feature implementation
* Real-time communication systems
* Modern frontend/backend integration
* Scalable project organization
* User-centric application development

Suitable for showcasing in:

* Software Engineering portfolios
* Frontend Engineer interviews
* Full Stack Developer applications
* Campus/Professional project showcases
