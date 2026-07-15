# Notes API

A RESTful Notes API built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **Joi**. The API allows users to create, retrieve, update, delete, and search notes.

---

## Features

- Create a new note
- Retrieve a note by ID
- Request validation using Joi
- MongoDB integration with Mongoose
- Text indexes on title and content for search
- Centralized error handling
- Input sanitization and validation

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Joi

---

## Project Structure

```text
.
├── controllers
│   └── note.controller.js
├── database
│   └── connectDB.js
├── middlewares
│   ├── errorHandler.js
│   ├── logger.js
│   └── validator.js
├── models
│   └── note.model.js
├── routes
│   └── note.route.js
├── schema
│   └── note.schema.js
├── index.js
├── package.json
└── ReadMe.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd <project-folder>
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and configure your MongoDB connection.

Example:

```env
PORT=3000
MONGODB_URI=<your-mongodb-connection-string>
```

### 5. Start the Development Server

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:3000
```

---

# API Endpoints

## API DOCUMENTATION

https://documenter.getpostman.com/view/2449601/2sBY4Mugtn

### Validation Rules

| Field | Required | Description |
|--------|----------|-------------|
| title | Yes | 3–100 characters |
| content | Yes | 10–5000 characters |
| category | No | Maximum 50 characters |
| tags | No | Maximum 10 unique tags |

---
### Error Responses

#### Invalid ID

**400 Bad Request**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "id",
      "message": "Invalid note ID"
    }
  ]
}
```

#### Note Not Found

**404 Not Found**

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm start` | Start the application |

---

## Validation

The API uses **Joi** to validate incoming requests before they reach the controllers.

Validation includes:

- Required fields
- String length validation
- Category length validation
- Tags array validation
- MongoDB ObjectId validation
- Removal of unknown request fields

---

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| `200 OK` | Request completed successfully |
| `201 Created` | Resource created successfully |
| `400 Bad Request` | Validation failed |
| `404 Not Found` | Resource not found |
| `500 Internal Server Error` | Unexpected server error |

---

# API Testing

The following screenshots demonstrate the successful testing of the implemented API endpoints and validation rules using Postman.

## 1. Test 1 – Create a Note (201 Created)

![Test 1 - Create a note]([assets/Test%201%20-%20Create%20a%20note.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%201%20%E2%80%94%20Create%20a%20note.png?raw=true))

---

## 2. Test 2 – Missing Title (400 Bad Request)

![Test 2 - Missing title]([assets/Test%202%20-%20Missing%20title.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%202%20%E2%80%94%20Missing%20title.png?raw=true))

---

## 3. Test 3 – Missing Content (400 Bad Request)

![Test 3 - Missing content]([assets/Test%203%20-%20Missing%20content.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%203%20%E2%80%94%20Missing%20content.png?raw=true))

---

## 4. Test 4 – Invalid Tags (400 Bad Request)

![Test 4 - Invalid tags]([assets/Test%204%20-%20Invalid%20tags.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%204%20%E2%80%94%20Invalid%20tags.png?raw=true))

---

## 5. Test 5 – Category Too Long (400 Bad Request)

![Test 5 - Category too long]([assets/Test%205%20-%20Category%20too%20long.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%205%20%E2%80%94%20Category%20too%20long.png?raw=true))

---

## 6. Test 6 – Get Existing Note (200 OK)

![Test 6 - Get existing note]([assets/Test%206%20-%20Get%20existing%20note.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%206%20%E2%80%94%20Get%20existing%20note.png?raw=true))

---

## 7. Test 7 – Invalid ObjectId (400 Bad Request)

![Test 7 - Invalid ObjectId]([assets/Test%207%20-%20Invalid%20ObjectId.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%207%20%E2%80%94%20Invalid%20ObjectId.png?raw=true))

---

## 8. Test 8 – Valid ObjectId That Doesn't Exist (404 Not Found)

![Test 8 - Valid ObjectId that doesn't exist]([assets/Test%208%20-%20Valid%20ObjectId%20that%20doesn't%20exist.png](https://github.com/s1xte3n/NoteAPI/blob/main/assets/Test%208%20%E2%80%94%20Valid%20ObjectId%20that%20doesn't%20exist.png?raw=true))
