const express = require('express');
const swaggerDocs = require('./swagger/swaggerConfig');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/news', require('./routes/newsRouter'));
app.use('/api/articles', require('./routes/articleRouter')); // Ensure this path matches the file name

// Swagger Documentation
swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
