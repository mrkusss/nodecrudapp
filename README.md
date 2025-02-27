# Simple CRUD App - Backend

A simple backend application implementing CRUD (Create, Read, Update, Delete) operations using Node.js, Express, and MongoDB.

## Features
- RESTful API with CRUD functionality
- MongoDB as the database
- Express.js framework
- Environment variable support
- Basic error handling

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```sh
git clone https://github.com/mrkusss/nodecrudapp.git
cd nodecrudapp
```

### Install Dependencies
```sh
npm install
```

### Run the Application
#### Development Mode
```sh
npm run dev
```
#### Production Mode
```sh
npm start
```

## API Endpoints

| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | `/api/produkts`  | Get all items       |
| GET    | `/api/produts/:id` | Get item by ID     |
| POST   | `/api/products`  | Create a new item   |
| PUT    | `/api/products/:id` | Update an item    |
| DELETE | `/api/products/:id` | Delete an item    |

## Contributing
Contributions are welcome! Feel free to open issues or create pull requests.
