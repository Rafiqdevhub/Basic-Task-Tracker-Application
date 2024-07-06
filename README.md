# Basic-Task-Tracker-Application

This is the README file for the Basic-Task-Tracker-Application.

## Table of Contents
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)

## Introduction

The Basic Task Tracker Application allows users to manage their tasks effectively. Users can create, read, update, and delete tasks. This project demonstrates the use of the MERN stack for full-stack web development.

## Features

- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rafiqdevhub/Basic-Task-Tracker-Application.git
   cd Basic-Task-Tracker-Application
   ```

2. **Install server dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Install client dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Run the server and client**:

   Open two terminal windows and run the following commands in each:

   **Server**:

   ```bash
   cd backend
   npm start
   ```

   **Client**:

   ```bash
   cd frontend
   npm run dev
   ```

## Usage

1. Open your browser.
2. Use the interface to add, view, update, and delete tasks.

## Technologies Used

- **Frontend**:

  - React
  - Axios

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.
