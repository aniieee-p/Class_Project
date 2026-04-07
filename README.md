# E-Learning Website

A Node.js + Express web application for an e-learning platform with EJS templating.

## Features

- Home, About, Services, and Contact pages
- Course management (Create, Read, Update, Delete)
- Login and Register forms
- Practice section

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express v5
- **Templating:** EJS
- **Dev Tool:** Nodemon

## Project Structure

```
├── index.js          # App entry point
├── routes/
│   └── courseRoute.js  # Course CRUD routes
├── ui/               # EJS view templates
│   ├── index.ejs
│   ├── about.ejs
│   ├── service.ejs
│   ├── contact.ejs
│   ├── course.ejs
│   ├── practice.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── header.ejs
└── users/            # User data directory
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

### Run in production mode

```bash
npm start
```

The server runs on **http://localhost:8080**

## Routes

| Method | Path               | Description         |
|--------|--------------------|---------------------|
| GET    | /                  | Home page           |
| GET    | /about             | About page          |
| GET    | /services          | Services page       |
| GET    | /contact           | Contact page        |
| GET    | /courses           | List all courses    |
| POST   | /courses/add       | Add a new course    |
| POST   | /courses/update/:id| Update a course     |
| GET    | /courses/delete/:id| Delete a course     |
| GET    | /practice          | Practice page       |
| GET    | /login             | Login form          |
| GET    | /register          | Register form       |

## Author

Saurav_Chauhan

## License

ISC
