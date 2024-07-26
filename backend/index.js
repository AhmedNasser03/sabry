const express = require('express');
const swaggerDocs = require('./swagger/swaggerConfig');

const app = express();


// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/News', require('./routes/newsRouter'));
app.use('/api/Articles', require('./routes/articlesRouter'));

// Swagger Documentation
swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
