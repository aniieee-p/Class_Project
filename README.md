<div align="center">

# 🎓 E-Learning Platform

### *Empowering Education Through Technology*

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](package.json)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aniieee-p/E_Learning)

</div>

---

## 🌟 Overview

A modern, full-stack e-learning platform built with Node.js and Express. This application provides a comprehensive learning management system with user authentication, course management, and an intuitive user interface powered by EJS templating and TailwindCSS.

## ✨ Features

🏠 **Multi-page Navigation** - Home, About, Services, and Contact pages  
📚 **Course Management** - Full CRUD operations for courses  
👤 **User Authentication** - Secure login and registration system  
🔐 **Session Management** - Persistent user sessions with flash messages  
🎯 **Practice Section** - Interactive learning environment  
📱 **Responsive Design** - Mobile-first approach with TailwindCSS  
🗄️ **Database Integration** - MongoDB with Mongoose ODM  

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Database</strong></td>
<td align="center"><strong>Styling</strong></td>
</tr>
<tr>
<td align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js"/><br/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" alt="Express"/>
</td>
<td align="center">
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black" alt="EJS"/><br/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"/>
</td>
<td align="center">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB"/><br/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white" alt="Mongoose"/>
</td>
<td align="center">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="TailwindCSS"/><br/>
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white" alt="PostCSS"/>
</td>
</tr>
</table>

## 📁 Project Structure

```
📦 e-learning/
├── 🚀 index.js              # Application entry point
├── 🗄️ db.js                 # Database configuration
├── 📂 models/               # Mongoose data models
│   ├── 👤 User.js           # User schema
│   └── 📚 Course.js         # Course schema
├── 🛣️ routes/               # Express route handlers
│   ├── 📚 courseRoute.js    # Course CRUD operations
│   └── 👤 userRoute.js      # User authentication routes
├── 🎨 ui/                   # EJS view templates
│   ├── 🏠 index.ejs         # Homepage
│   ├── ℹ️ about.ejs          # About page
│   ├── 🛠️ service.ejs       # Services page
│   ├── 📞 contact.ejs       # Contact page
│   ├── 📚 courses.ejs       # Course listing
│   ├── 📖 course.ejs        # Individual course
│   ├── 🎯 practice.ejs      # Practice section
│   ├── 🔐 login.ejs         # Login form
│   ├── 📝 register.ejs      # Registration form
│   ├── 👤 profile.ejs       # User profile
│   ├── 🧩 header.ejs        # Header component
│   ├── 🦶 footer.ejs        # Footer component
│   └── ❌ 404.ejs           # Error page
├── 🎨 public/css/           # Stylesheets
└── 👥 users/                # User data directory
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aniieee-p/E_Learning.git
   cd E_Learning
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS (TailwindCSS)**
   ```bash
   npm run build:css
   ```

4. **Start the application**
   
   **Development mode** (with auto-reload):
   ```bash
   npm run dev
   ```
   
   **Production mode**:
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   🌐 http://localhost:8080
   ```

### Development Workflow

For active development with CSS watching:
```bash
# Terminal 1: Start the server
npm run dev

# Terminal 2: Watch CSS changes
npm run css
```

## 🗺️ API Routes

<details>
<summary><strong>📄 Page Routes</strong></summary>

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| `GET` | `/` | 🏠 Homepage | ✅ |
| `GET` | `/about` | ℹ️ About page | ✅ |
| `GET` | `/services` | 🛠️ Services page | ✅ |
| `GET` | `/contact` | 📞 Contact page | ✅ |
| `GET` | `/practice` | 🎯 Practice section | ✅ |

</details>

<details>
<summary><strong>📚 Course Routes</strong></summary>

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| `GET` | `/courses` | 📋 List all courses | ✅ |
| `GET` | `/course/:id` | 📖 View single course | ✅ |
| `POST` | `/courses/add` | ➕ Create new course | ✅ |
| `POST` | `/courses/update/:id` | ✏️ Update course | ✅ |
| `GET` | `/courses/delete/:id` | 🗑️ Delete course | ✅ |

</details>

<details>
<summary><strong>👤 User Routes</strong></summary>

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| `GET` | `/login` | 🔐 Login form | ✅ |
| `GET` | `/register` | 📝 Registration form | ✅ |
| `POST` | `/login` | 🔑 Process login | ✅ |
| `POST` | `/register` | 👤 Create account | ✅ |
| `GET` | `/profile` | 👤 User profile | ✅ |
| `GET` | `/logout` | 🚪 Logout user | ✅ |

</details>

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
PORT=8080
MONGODB_URI=mongodb://localhost:27017/elearning
SESSION_SECRET=your-secret-key
```

### Database Setup
The application uses MongoDB with Mongoose. Make sure MongoDB is running locally or provide a cloud connection string.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anisha Patel**
- GitHub: [@aniieee-p](https://github.com/aniieee-p)

---

<div align="center">

### 🌟 Star this repository if you found it helpful!

Made with ❤️ and ☕ by [Anisha Patel](https://github.com/aniieee-p)

</div>
