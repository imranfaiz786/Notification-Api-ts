# Notification Service API

A simple Notification Service API built with Node.js, Express, MongoDB, and TypeScript. This API allows users to create and fetch notifications stored in a MongoDB database.

## Features

- **Create Notifications**: Add new notifications with details like reminder messages, invitation requests, and actions.
- **Fetch Notifications**: Retrieve all stored notifications from the database.

## Tech Stack

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing notification data.
- **Mongoose**: ODM for MongoDB, modeling the notification schema.
- **TypeScript**: For type safety and better developer experience.

## Setup & Installation

### Prerequisites

- Node.js (LTS version)
- MongoDB (or use MongoDB Atlas for a cloud database)

### Installation Steps

1. Clone the repository:
    ```bash
    git https://github.com/imranfaiz786/Notification-Api-ts.git
    cd Notification-Api-ts
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with your MongoDB URI:
    ```bash
    MONGO_URI=mongodb://localhost:27017/yourdbname
    ```

4. Run the application:
    ```bash
    npm start
    ```

## API Endpoints

### POST `/api/notification/add`

Adds a new notification.

### GET `/api/notification/:id`

Fetches a notification by ID.

## Running Tests

```bash
yarn dev
```

## Contributing

Fork the repository, make changes, and submit a pull request with your improvements or fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.