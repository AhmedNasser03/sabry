const express = require('express');
const { createArticle } = require('../controllers/ArticleController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Articles
 */

/**
 * @swagger
 * /api/Articles/create-article:
 *   post:
 *     summary: Create a new article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Article created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/create-article', createArticle);

module.exports = router;
