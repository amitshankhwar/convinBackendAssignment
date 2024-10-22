Here's a `README.md` file that covers all the points you mentioned and provides detailed documentation for your project. 

```markdown
# Convin Assignment - Expense Tracking Backend

## Project Overview

This project, named **Convin Assignment**, is an expense tracking backend built with Express.js. It tracks expenses and splits them according to users in exact numbers, percentages, and equal partitions. The application creates a downloadable balance sheet in CSV and XLSX formats and provides all expense details to the admin. It features an admin panel, user authentication at every route, error handling, input validation, optimized performance for large datasets, and unit and integration testing. MongoDB is used as the database, and JWT is used for authentication.

## File Structure

```plaintext
src/
│
├── controllers/
│   ├── authController.js
│   └── expenseController.js
│
├── database/
│   └── index.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── expenseModel.js
│   └── userModel.js
│
├── routes/
│   ├── authRoutes.js
│   └── expenseRoutes.js
│   └── utils/
│       └── token.js
│
├── config.ts
├── index.js
└── .env
└── .gitignore
└── package-lock.json
└── package.json

```

## Detailed Documentation

### Controllers

- **authController.js**: Handles user authentication (login, signup, logout, etc.).
- **expenseController.js**: Manages CRUD operations for expenses, including splitting logic and generating balance sheets.

### Database

- **index.js**: Establishes the connection to the MongoDB database.

### Middleware

- **authMiddleware.js**: Provides middleware functions for verifying JWT tokens and protecting routes.

### Models

- **expenseModel.js**: Defines the schema for expenses, including fields for amount, description, date, and related user IDs.
- **userModel.js**: Defines the schema for users, including fields for username, email, password, and role (admin/user).

### Routes

- **authRoutes.js**: Contains routes for authentication (e.g., `/login`, `/signup`).
- **expenseRoutes.js**: Contains routes for managing expenses (e.g., `/expenses`, `/split`).

### Utils

- **token.js**: Utility functions for generating and verifying JWT tokens.

### Configuration Files

- **config.js**: Configuration settings for the application (e.g., database URL, JWT secret).
- **index.js**: Entry point for the application, setting up Express server and routes.

### Environment and Dependency Files

- **.env**: Environment variables for sensitive configuration (not included in version control).
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package-lock.json**: Lockfile for npm dependencies.
- **package.json**: Project dependencies and scripts.

## Features

- **User Authentication**: Secure user authentication using JWT, with middleware to protect routes.
- **Expense Tracking**: CRUD operations for expenses, with advanced splitting logic based on exact numbers, percentages, and equal partitions.
- **Admin Panel**: Provides detailed expense information to the admin, including a downloadable balance sheet in CSV and XLSX formats.
- **Error Handling and Input Validation**: Comprehensive error handling and input validation to ensure data integrity.
- **Optimized Performance**: Designed to handle large datasets efficiently.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ashupandey1620/convin-assignment.git
    cd convin-assignment
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    ACCESS_TOKEN_SECRET="your_access_token_secret
    ```

4. Run the application:
    ```bash
    npm start
    ```


## Contact

For any questions or feedback, please contact [amit18shankhwar@gmail.com](mailto:amit18shankhwar@gmail.com).

```

This `README.md` provides a comprehensive overview of your project, covering the file structure, features, installation instructions, and contact information.
