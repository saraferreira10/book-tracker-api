# 📚 BookTracker

**BookTracker** is a simple application built with Node.js and Express that allows users to track books they want to read and books they have already read. Using Sequelize as an ORM to interact with MySQL database, the project provides a RESTful API to create, read, update, and delete (CRUD) book information.

## Functionalities

- **Add Books**: Add new books that you want to read or have read.
- **List All Books**: List all books stored in the database.
- **Get Book by ID**: Get specific details of a book using its ID.
- **Update Book**: Update information of an existing book.
- **Delete Book**: Remove a book from the database.

## Project Structure

```bash
project-root/
├── app.js
├── routes/
│   └── bookRoutes.js
│   └── reviewRoutes.js
├── controllers/
│   └── bookController.js
│   └── reviewController.js
├── data/
│   └── database.js
├── models/
│   └── books.js
│   └── reviews.js
├── .env
└── server.js
```

## Technologies Used

- **Node.js:** Platform for building the application.
- **Express:** Framework for creating the web server and routes.
- **Sequelize:** ORM for managing database interactions.
- **MySQL:** Relational database.
- **dotenv:** Loads environment variables from a .env file.

## Installation and Setup

### Prerequisites

- **Node.js:**
- **MySql:**

### Step-by-Step

1. Clone the repository:

```bash
 git clone https://github.com/saraferreira10/book-tracker.git
 cd book-tracker/backend
```

2. Install dependencies:

```bash
 npm install
```

3. Configure environment variables by creating a .env file in the root directory with the following content:

```bash
    USER=your-user
    PASSWORD=your-password
    DATABASE=book_track_db
    HOST=localhost
```

4. Set up MySQL database and adjust credentials in the .env file.

5. Run the server:

```bash
node server.js
```

## API Endpoints

### List all books

```http
    GET /api/v1/books
```

### Get a book by ID

```http
    GET /api/v1/books/:id
```

### Add a new book

```http
    POST /api/v1/books
```

#### Request body

```json
{
  "title": "Book Title",
  "author": "Book Author",
  "description": "Book Description",
  "imgUrl": "Book Image URL",
  "status": "Book Status"
}
```

### Update a book

```http
    PUT /api/v1/books/:id
```

#### Request body

```json
{
  "title": "New Book Title",
  "author": "New Book Author",
  "description": "New Book Description",
  "imgUrl": "New Book Image URL",
  "status": "New Book Status"
}
```

### Delete a book

```http
    DELETE /api/v1/books/:id
```
