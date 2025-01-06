# Dynamic-Blog-Platform-using-Express.js-with-CRUD-Functionality
Here's a well-structured template for your GitHub README file for the project:

---

# Dynamic Blog Platform

A web-based blogging platform built using **Express.js**, **EJS**, and **Node.js**, featuring CRUD (Create, Read, Update, Delete) functionality. This project is perfect for learning and showcasing full-stack web development skills.

## Features

- View all posts with a user-friendly interface.
- Add new posts with unique usernames and content.
- Edit existing posts with updated content.
- Delete posts seamlessly.
- Dynamic routing for individual posts.
- Method override for enabling HTTP methods like PUT and DELETE.
- UUID-based unique identifiers for each post.
- Fully responsive static files served using Express.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs and handling routes.
- **EJS**: Template engine for rendering dynamic content.
- **UUID**: Library for generating unique IDs for posts.
- **Method-Override**: Middleware for supporting PUT and DELETE HTTP methods.
- **HTML/CSS**: For building the front-end interface.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Preedpn/dynamic-blog-platform.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dynamic-blog-platform
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node app.js
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8080/posts
   ```

## Usage

- **Home Page**: Displays all posts.
- **Create New Post**: Navigate to `/posts/new` to add a new post.
- **View a Post**: Click on a post title to view details.
- **Edit a Post**: Navigate to `/posts/:id/edit` to modify content.
- **Delete a Post**: Remove a post from the platform with a single click.

## Directory Structure

```
|-- public/        # Static files (CSS, images)
|-- views/         # EJS templates
|   |-- index.ejs  # Home page
|   |-- new.ejs    # Create post form
|   |-- edit.ejs   # Edit post form
|   |-- show.ejs   # Single post view
|-- app.js         # Main server file
|-- package.json   # Dependencies and scripts
```

