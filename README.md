# 🧠 MemoryMeld – Personal Memory Tracker

MemoryMeld is a full-stack web application that enables users to securely store and organize their personal memories. Each memory is auto-tagged using the OpenAI API to improve searchability and organization. The app uses Angular for the frontend, Node.js and Express for the backend, and MySQL for data storage.

---
> 🔑 **Note**: You must obtain your own OpenAI API key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) and add it to the `.env` file:

```env
OPENAI_API_KEY=your_openai_key_here

## 🔧 Step 1: Clone the Repository

```bash
git clone https://github.com/abhinavkeesari/memorymeld.git
cd memorymeld
```

---

## 🖥️ Step 2: Set Up the Backend

```bash
cd memorymeld-backend
npm install
```

Create a `.env` file in the `memorymeld-backend` directory with the following content:

```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=memorymeld
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
```

Create the MySQL database:

```sql
CREATE DATABASE memorymeld;

-- Create 'users' table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create 'memories' table
CREATE TABLE memories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

```

Start the backend server:

```bash
node index.js
```

> Backend runs at: `http://localhost:3000`

---

## 🌐 Step 3: Set Up the Frontend

```bash
cd ../memorymeld-frontend
npm install
ng serve
```

> Frontend runs at: `http://localhost:4200`

---

## 🚀 Future Enhancements

- ✏️ Edit and delete memory entries  
- 🔍 Search and filter memories by tags or date  
- 📊 Dashboard for memory insights  
- 📁 Support for image or file attachments  
- 🧩 Multi-user collaboration and sharing features
