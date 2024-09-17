const express = require('express');
const path = require('path');
const app = express();

// Serve static files like HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')));

// Root route - serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
