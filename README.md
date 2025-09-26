# Expense Tracker (MERN + Tailwind/DaisyUI)

A simple **Expense Tracker** built with the MERN stack.
Features JWT authentication, CRUD for expenses, and a clean React UI styled with Tailwind + DaisyUI.

---

##  Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT Auth
- **Frontend:** React.js, React Router, TailwindCSS + DaisyUI
- **State:** Context API
- **HTTP:** Axios with auth interceptor

---

##  Features

-  User registration & login with JWT
-  Persistent login (token stored in `localStorage`)
-  Add, ✏️ Edit, 🗑 Delete expenses
-  Filter & list expenses by user
-  Modular and clean code structure for easy scaling

---

##  Setup & Run

###  Environment Variables

Create a `.env` file in the **server** folder:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/expense_tracker
JWT_SECRET=your_secret_key
```

Create a `.env` file in the **client** folder:

```env
REACT_APP_API_URL=http://localhost:3001/api
```

---

### Backend

```bash
# go to backend folder
cd server

# install dependencies
npm install

# run development server with nodemon
npm run dev
```

Backend will start at: **http://localhost:3001**

---

###  Frontend

```bash
# go to frontend folder
cd client

# install dependencies
npm install

# start development server
npm start
```

Frontend will start at: **http://localhost:3000**

---

##  API Endpoints

| Method | Endpoint       | Description                |
|--------|---------------|----------------------------|
| POST   | /auth/register | Register a new user        |
| POST   | /auth/login    | Login user, returns JWT    |
| GET    | /expenses      | Get all user expenses      |
| POST   | /expenses      | Add new expense            |
| PUT    | /expenses/:id  | Update an existing expense |
| DELETE | /expenses/:id  | Delete an expense          |

---

