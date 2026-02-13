Perfect 👏 I’ll prepare a **professional, hackathon-ready README.md** for your entire project.

You can directly copy-paste this into your `README.md` file.

---

# 📘 EduSmart AI

### AI-Powered Smart Classroom & Timetable Scheduler

EduSmart AI is a role-based smart classroom management system built with React.
It allows Admin, Teacher, and Student users to access personalized dashboards with protected routing and structured authentication.

The project focuses on intelligent timetable generation, structured role management, and a clean admin dashboard layout.

---

# 🚀 Features

## 🔐 Authentication System

* Context-based authentication (React Context API)
* Role-based login (Admin / Teacher / Student)
* Protected routes
* Logout functionality
* Prevents unauthorized dashboard access

## 🛡 Role-Based Access Control

Each user role has restricted access:

* Admin → Admin Dashboard
* Teacher → Teacher Dashboard
* Student → Student Dashboard

Unauthorized route access automatically redirects to login.

## 📊 Admin Dashboard

* Fixed Sidebar
* Top Navbar
* Statistics Cards
* AI Timetable Generator Banner
* Clean and modern UI layout
* Gradient UI styling

## 🎯 Project Goals

* Smart classroom management
* Conflict-free timetable generation (future enhancement)
* Scalable architecture
* Clean folder structure
* Production-ready routing structure

---

# 🛠️ Tech Stack

| Technology        | Purpose                             |
| ----------------- | ----------------------------------- |
| React             | Frontend library                    |
| React Router DOM  | Routing system                      |
| Context API       | State management for authentication |
| Vite              | Development environment             |
| CSS               | Styling                             |
| JavaScript (ES6+) | Application logic                   |

---

# 📂 Project Structure

```
client/
└── src/
    │
    ├── components/
    │   ├── admin/
    │   │   ├── AdminSidebar.jsx
    │   │   ├── AdminNavbar.jsx
    │   │
    │   └── shared/
    │       └── ProtectedRoute.jsx
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   └── useAuth.js
    │
    ├── pages/
    │   ├── Login.jsx
    │   │
    │   ├── admin/
    │   │   ├── AdminLayout.jsx
    │   │   └── AdminDashboard.jsx
    │   │
    │   ├── teacher/
    │   │   └── TeacherDashboard.jsx
    │   │
    │   └── student/
    │       └── StudentDashboard.jsx
    │
    ├── routes/
    │   └── AppRoutes.jsx
    │
    ├── styles/
    │   ├── login.css
    │   └── admin.css
    │
    ├── App.jsx
    └── main.jsx
```

---

# 🧠 Architecture Explanation

## 1️⃣ Authentication Flow

1. User logs in via Login page
2. `login()` function in AuthContext validates email
3. Role is assigned and stored in Context
4. User is redirected to respective dashboard
5. ProtectedRoute checks:

   * If user exists
   * If role matches allowedRole

If not → Redirect to login

---

## 2️⃣ Routing Architecture

* `BrowserRouter` is defined once in `App.jsx`
* `AppRoutes.jsx` defines all routes
* ProtectedRoute wraps role-specific dashboards

This ensures:

* Clean separation of routing logic
* Secure role-based access

---

## 3️⃣ Layout System (Admin)

AdminDashboard uses:

```
AdminLayout
   ├── AdminSidebar
   ├── AdminNavbar
   └── Dashboard Content
```

This structure allows:

* Reusable layout for future admin pages
* Clean UI separation
* Scalable design

---

# 🔐 Test Credentials (Temporary Mock Login)

| Role    | Email                                         |
| ------- | --------------------------------------------- |
| Admin   | [admin@gmail.com](mailto:admin@gmail.com)     |
| Teacher | [teacher@gmail.com](mailto:teacher@gmail.com) |
| Student | [student@gmail.com](mailto:student@gmail.com) |

Password is currently not validated (mock authentication).

---

# 🏗️ How to Run the Project

## 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
```

## 2️⃣ Navigate to client folder

```bash
cd client
```

## 3️⃣ Install dependencies

```bash
npm install
```

## 4️⃣ Start development server

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

# 🎨 UI Highlights

* Modern sidebar navigation
* Active route highlighting
* Responsive layout
* Gradient AI banner
* Card-based statistics section

---

# 🔮 Future Enhancements

* Real backend authentication (JWT)
* Database integration
* AI-based timetable generator logic
* Attendance management
* Charts and analytics dashboard
* Dark mode toggle
* Sidebar collapse functionality
* Persistent login using localStorage

---

