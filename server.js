const express = require('express');
const sequelize = require('./config/db');
const bookRoutes = require('./routes/books');
const memberRoutes = require('./routes/members');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Authenticate database connection (does NOT create tables)
sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to MySQL database (library_db)');
  })
  .catch(err => {
    console.error('Unable to connect to database:', err.message);
    process.exit(1); // Exit if DB connection fails
  });

// Register API routes
app.use('/api/books', bookRoutes);
app.use('/api/members', memberRoutes);

// Root endpoint for testing
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Library Management System API!',
    endpoints: {
      books: 'GET /api/books',
      members: 'GET /api/members'
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});