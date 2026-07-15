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

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/e5ad2e82-6799-4a14-a017-d986998018b4" />


---

## 2. Test 2 – Missing Title (400 Bad Request)

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/a5e98df7-94a7-46e0-bc74-c3749f636150" />

---

## 3. Test 3 – Missing Content (400 Bad Request)

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/41cacf8f-2bfc-41f6-9105-0a6409859560" />

---

## 4. Test 4 – Invalid Tags (400 Bad Request)

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/5bd0c893-2c40-4404-a143-a2998a59c0d7" />

---

## 5. Test 5 – Category Too Long (400 Bad Request)

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/bf783f44-fa94-4153-b490-f8062bfea544" />

---

## 6. Test 6 – Get Existing Note (200 OK)

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/24b01438-5034-43b5-a474-fab452b8e275" />

---

## 7. Test 7 – Invalid ObjectId (400 Bad Request)

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/367484a2-74ea-4eb8-8b7a-d1bb24c7aa5e" />

---

## 8. Test 8 – Valid ObjectId That Doesn't Exist (404 Not Found)

<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/89cf0e2c-2801-44a7-ae92-188aa20a8c68" />
