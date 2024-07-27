const express = require('express');
const { createArticle } = require('../controllers/articleController'); // Ensure this path matches the file name
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Articles
 */

/**
 * @swagger
 * /api/articles/create-article:
 *   post:
 *     summary: Create a new message
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Article created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/create-article', createArticle);

module.exports = router;
