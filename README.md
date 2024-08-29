# Userverse API

## Overview

**Userverse API** is a comprehensive and user-centric system designed to manage users efficiently. It provides RESTful endpoints for user registration, retrieval, updating, deletion, and listing with various filters. This project follows Node.js best practices, ensuring optimized performance, code quality, and adherence to REST API standards.

## Features

- **Register User**: Create a new user with details such as First Name, Last Name, Email, and Phone.
- **Get User by ID**: Retrieve user information using a unique user ID.
- **Update User**: Modify existing user details.
- **Delete/Disable User**: Soft delete or disable a user.
- **List All Users with Filters**: Retrieve a list of users with filtering options based on First Name, Last Name, Email, and Phone.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Sequelize**: Promise-based Node.js ORM for managing databases.
- **SQLite**: Lightweight, disk-based database used for storing user information.
- **Typescript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Nodemon**: A tool that helps develop Node.js-based applications by automatically restarting the node application when file changes in the directory are detected.
- **Helmet**: Helps secure Express apps by setting various HTTP headers.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Winston**: A logger for just about everything.
- **Husky**: A tool to enable Git hooks.
- **Commitlint**: A tool to enforce commit message conventions.

```
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── middlewares
│   ├── migrations
│   └── server.ts
├── dist
├── tests
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── package.json
└── README.md
```

## Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/userverse_api.git
cd userverse_api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

To start the development server with auto-reloading:

```bash
npm run dev
```

To build the project and start the production server:

```bash
npm run build
npm start
```

### 6. Test the API with Postman

You can import the Postman collection [here](#). This collection includes all the endpoints for user management.

## API Endpoints

- **POST /users/register**: Register a new user.
- **GET /users/:id**: Get user details by ID.
- **PUT /users/:id**: Update user details.
- **DELETE /users/:id**: Delete or disable a user.
- **GET /users**: List all users with filters.

## Code Quality & Standards

- The codebase follows strict ESLint and Prettier configurations for consistent code quality and formatting.
- Git hooks managed by Husky ensure that code is linted and formatted before commits.
- The project adheres to a commit message convention enforced by Commitlint.
