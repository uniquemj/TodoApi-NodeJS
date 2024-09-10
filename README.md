# TodoApi-NodeJS

A simple API for managing a todo list, built using pure Node.js without any frameworks.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)

## Features
- Manage todo items: create, update, delete, and view tasks.
- Pure Node.js implementation with modular architecture.
- Handles common errors and invalid requests.

## Requirements
- Node.js (version X.X.X or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/uniquemj/TodoApi-NodeJS.git

2. Navigate to the project directory:
    ```bash
    cd TodoApi-NodeJS

3. Install dependencies:
    ```bash
    npm install

## Usage

1. Start the API server
    ```bash
    npm start

## Folder Structure

- controller/ : Logic for handling API requests and responses.
- data/: JSON file for storing todo items (taking this as database).
- models/: Data models for todo items.


## API Endpoints
- ```GET /api/todos``` : Fetch all todos.
- ```POST /api/todos```: Add a new todo.
- ```PUT /api/todos/:id``` : Update an existing todo by ID.
- ```PUT /api/todos/:id``` : Delete a todo by ID.
 


