# 🧠 MemoryMeld Application Documentation

## 1. Introduction
MemoryMeld is a full-stack application that allows users to save and manage personal memories. Each memory is tagged using AI (OpenAI GPT API), and users can log in, register, save memories, and view their personal memory list. The app is built using Angular for the frontend and Node.js, Express, MySQL for the backend, with JWT-based authentication.

## 2. Technologies Used
- Angular (Frontend)
- Node.js with Express (Backend)
- MySQL (Database)
- OpenAI API (for tag generation)
- JWT for authentication

## 3. Backend Code Breakdown

### 🔐 Auth Middleware (`authMiddleware.js`)
- Extracts JWT from the Authorization header.
- Verifies token and sets `req.user` for downstream use.

### 🔐 `auth.js`
- `POST /register`: Registers a new user. Hashes password with bcrypt.
- `POST /login`: Authenticates a user and returns a signed JWT containing `userId`.

### 🧠 `memory.js`
- `POST /api/memory`: Saves memory to DB with `userId` from token, calls OpenAI to get tags.
- `GET /api/memory`: Fetches only that user's memories based on token's `userId`.

## 4. Frontend Code Breakdown

### 📦 `MemoryService (memory.service.ts)`
- `saveMemory()`: Sends POST request with token.
- `getAllMemories()`: Sends GET request with token.

### 🧭 `AppRoutingModule (app-routing.module.ts)`
- Routes for login, register, dashboard.

### 🔒 AuthGuard
- Prevents navigation if user is not authenticated (checks `localStorage` for token).

### 📝 `MemoryFormComponent`
- Provides form to submit new memory.

### 📋 `MemoryListComponent`
- Displays user's memory list.

## 5. JWT Authentication Flow

1. User logs in.
2. Server sends a JWT with `userId` in payload.
3. Angular stores this token in `localStorage`.
4. All requests to backend use this token in `Authorization` header.
5. Backend verifies and extracts `userId` using auth middleware.
6. Only user-specific data is fetched/stored.

## 6. OpenAI GPT Integration

- When a user submits a memory, OpenAI is prompted to generate suitable tags based on memory content.
- Tags are stored in the DB with the memory.
- This enhances search and filtering capabilities (future implementation).

## 7. Current Status

- ✅ Login and registration with JWT auth - DONE
- ✅ Memory saving and retrieval per user - DONE
- ✅ Frontend routing and guards - DONE
- ✅ Integration with OpenAI GPT - DONE
- ✅ Logout implemented - DONE
- 🔜 Upcoming: Memory deletion, editing, filtering, profile view

## memorymeld-frontend

The frontend of the MemoryMeld application is built using Angular and provides a clean, user-friendly interface for users to register, log in, and manage their personal memories. It communicates with a Node.js/Express backend via secure RESTful APIs, using JWT for authentication.

### Key Features:
- User registration and login functionality
- Secure token storage using `localStorage`
- Memory creation with automatic AI-generated tags (via OpenAI API)
- Personalized memory dashboard displaying user-specific notes
- Route protection using Angular guards
- Modular codebase with services and guards for clean separation of concerns

This Angular app handles all user interaction and ensures authenticated users can view, save, and manage their memories seamlessly.
