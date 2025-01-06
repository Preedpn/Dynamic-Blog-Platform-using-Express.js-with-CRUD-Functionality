const express = require("express"); // Importing Express framework
const app = express(); // Creating an instance of Express
const port = 8080; // Defining the port for the server
const path = require("path"); // Importing path module for handling file paths
const { v4: uuidv4 } = require("uuid"); // Importing UUID library for unique ID generation
const methodOverride = require("method-override"); // Importing method-override for handling non-standard HTTP methods

// Middleware to parse incoming form data and enable method-override for HTTP verbs like PUT and DELETE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Setting the view engine to EJS and defining the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Setting up the public directory to serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Mock database: Array to store posts with unique IDs, usernames, and content
let posts = [
    { id: uuidv4(), username: "apnacollege", content: "I love coding!" },
    { id: uuidv4(), username: "priti", content: "I love dancing and singing!" },
    { id: uuidv4(), username: "dipan", content: "There is a dog!" },
];

// GET route to display all posts
// Renders the `index.ejs` file and passes the `posts` array to it
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// GET route to render the form for creating a new post
// Renders the `new.ejs` file
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// POST route to handle the creation of a new post
// Accepts `username` and `content` from the form, generates a new ID, and adds the post to the `posts` array
app.post("/posts", (req, res) => {
    const { username, content } = req.body; // Extracting form data
    const id = uuidv4(); // Generating a unique ID for the new post
    posts.push({ id, username, content }); // Adding the new post to the mock database
    res.redirect("/posts"); // Redirecting to the posts listing page
});

// GET route to display a single post by its unique ID
// Finds the post in the `posts` array and renders the `show.ejs` file with the post data
app.get("/posts/:id", (req, res) => {
    const { id } = req.params; // Extracting the post ID from the request parameters
    const post = posts.find((p) => p.id === id); // Finding the post with the matching ID
    res.render("show.ejs", { post }); // Rendering the `show.ejs` file with the post data
});

// GET route to render the edit form for a specific post
// Finds the post in the `posts` array and renders the `edit.ejs` file with the post data
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params; // Extracting the post ID from the request parameters
    const post = posts.find((p) => p.id === id); // Finding the post with the matching ID
    res.render("edit.ejs", { post }); // Rendering the `edit.ejs` file with the post data
});

// PATCH route to handle updating a specific post
// Finds the post in the `posts` array by ID, updates its content, and redirects to the posts page
app.patch("/posts/:id", (req, res) => {
    const { id } = req.params; // Extracting the post ID from the request parameters
    const { content } = req.body; // Extracting the updated content from the form data
    const post = posts.find((p) => p.id === id); // Finding the post with the matching ID
    if (post) {
        post.content = content; // Updating the post content
    }
    res.redirect("/posts"); // Redirecting to the posts listing page
});

// DELETE route to handle deleting a specific post
// Filters out the post with the matching ID from the `posts` array and redirects to the posts page
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params; // Extracting the post ID from the request parameters
    posts = posts.filter((p) => p.id !== id); // Removing the post with the matching ID
    res.redirect("/posts"); // Redirecting to the posts listing page
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`); // Logging a message to indicate the server is running
});
