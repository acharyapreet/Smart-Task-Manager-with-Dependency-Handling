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
│   ├── services/          # Business logic (taskService.js, authService.js, userService)
│   ├── repositories/      # DB queries (task.repository.js, user.repository.js)
│   ├── models/            # Mongoose models (User, Task)
│   ├── routes/            # Express routes (authRouter, userRouter)

│   └── index.js           # App entry point
│
├── .env                   # Environment variables (DB_URI, JWT_SECRET, etc.)
├── package.json
└── README.md



1. Install dependencies
npm install

2. Setup .env file

Create a .env file in root:

PORT = 5600
DB_URL = "mongodb+srv://acharyapreet2:6hyuC367dsd4tZ1z@cluster0.okw5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET = 'hello'
JWT_EXPIRE = '1h'

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



