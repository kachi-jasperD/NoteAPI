# Notes API

A RESTful Notes API built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **Joi**. The API allows users to create notes and retrieve individual notes by their ID while validating incoming requests.

---

## Features

- Create a new note
- Retrieve a note by ID
- Request validation using Joi
- MongoDB integration with Mongoose
- Centralized error handling
- Input sanitization and validation

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi

---

## Project Structure

```text
.
├── controllers
│   └── sample.controller.js
├── database
│   └── connectDB.js
├── middlewares
│   ├── errorHandler.js
│   ├── logger.js
│   └── validator.js
├── models
│   └── sample.model.js
├── routes
│   └── sample.route.js
├── schema
│   └── sample.schema.js
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

## Create a Note

**POST** `/api/notes`

Creates a new note.

### Request Body

```json
{
  "title": "Prepare AWS Developer Exam",
  "content": "Study Lambda, DynamoDB and API Gateway.",
  "category": "Study",
  "tags": ["aws", "lambda"],
  "priority": "High",
  "isPinned": true,
  "reminderDate": "2026-08-01T09:00:00Z"
}
```

### Success Response

**201 Created**

```json
{
  "success": true,
  "message": "Note created successfully",
  "data": {
    "_id": "...",
    "title": "...",
    "content": "...",
    "category": "...",
    "tags": [],
    "priority": "...",
    "isPinned": false,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Validation Rules

| Field | Required | Description |
|--------|----------|-------------|
| title | Yes | 3–100 characters |
| content | Yes | 10–5000 characters |
| category | No | Personal, Work, Study, Ideas, Other |
| tags | No | Maximum 10 unique tags |
| priority | No | Low, Medium, High |
| isPinned | No | Boolean |
| reminderDate | No | Must be a future date |

---

## Get a Note by ID

**GET** `/api/notes/:id`

Returns a single note using its MongoDB ObjectId.

### Success Response

**200 OK**

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "...",
    "content": "...",
    "category": "...",
    "tags": [],
    "priority": "...",
    "isPinned": false,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

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
- Enum validation
- Array validation
- Boolean validation
- Future date validation
- MongoDB ObjectId validation

---

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| `200 OK` | Request completed successfully |
| `201 Created` | Resource created successfully |
| `400 Bad Request` | Validation failed |
| `404 Not Found` | Resource not found |
| `500 Internal Server Error` | Unexpected server error |
