const express = require('express'); // Correct module import
const app = express(); // Create an instance of the express app
const port = 8080;

// Use middleware to parse JSON request bodies
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`); // Template string for better readability
});
