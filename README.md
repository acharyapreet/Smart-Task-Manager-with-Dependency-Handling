📝 Task Manager API
A simple Task Management API built with Node.js, Express, MongoDB, JWT Authentication.
It allows users to sign up, log in, and manage their tasks.

🚀 Features

User Authentication (Signup & Login)

Passwords hashed using bcrypt

JWT-based authentication stored in cookies

Task CRUD operations:

Create Task

Get User’s Tasks

Update Task

Delete Task

MongoDB with Mongoose for database

🛠 Tech Stack

Backend: Node.js, Express

Database: MongoDB + Mongoose

Authentication: JWT + bcrypt

Other Libraries:

cookie-parser → handle cookies

body-parser → parse request bodies

dotenv → environment variables

nodemon → dev server auto-restart

📂 Project Structure
project/
│── src/
│   ├── controllers/       # Route handlers
│   ├── services/          # Business logic (taskService.js, authService.js)
│   ├── repositories/      # DB queries (task.repo.js, user.repo.js)
│   ├── models/            # Mongoose models (User, Task)
│   ├── routes/            # Express routes (authRoutes, taskRoutes)
│   ├── middlewares/       # Auth middleware (JWT verification)
│   └── index.js           # App entry point
│
├── .env                   # Environment variables (DB_URI, JWT_SECRET, etc.)
├── package.json
└── README.md

⚡ Installation
1. Clone repo
git clone https://github.com/your-username/task-manager.git
cd task-manager

2. Install dependencies
npm install

3. Setup .env file

Create a .env file in root:

PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secret_key

4. Run server
npm run dev

📌 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/auth/signup	Register new user
POST	/auth/login	Login user & get token
Task Routes (Protected)
Method	Endpoint	Description
POST	/tasks	Create new task
GET	/tasks	Get all tasks for user
GET	/tasks/:id	Get single task
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task
🔐 Authentication Flow

User signs up → password is hashed with bcrypt.

On login → JWT is generated and stored in cookies.

Protected routes check JWT before allowing access.

🧑‍💻 Scripts

npm run dev → start with nodemon

npm start → start production server

🤝 Contribution

Pull requests are welcome. Please open an issue first to discuss major changes.

📜 License

MIT License-react-express-same-server-port/)

