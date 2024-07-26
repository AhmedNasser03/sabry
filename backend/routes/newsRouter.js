const express = require('express');
const { getSocialNews, getmedicalNews, getThecNews, getSportNews, getNews } = require('../controllers/newsController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: News
 */

/**
 * @swagger
 * /api/News/allNews:
 *   get:
 *     summary: Retrieve all news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: A list of all news
 */
router.get('/allNews',getNews);

/**
 * @swagger
 * /api/News/sportNews:
 *   get:
 *     summary: Retrieve sports news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: A list of sports news
 */
router.get('/sportNews',getSportNews);

/**
 * @swagger
 * /api/News/thecNews:
 *   get:
 *     summary: Retrieve technology news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: A list of technology news
 */
router.get('/thecNews',getThecNews);

/**
 * @swagger
 * /api/News/medicalNews:
 *   get:
 *     summary: Retrieve medical news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: A list of medical news
 */
router.get('/medicalNews',getmedicalNews);

/**
 * @swagger
 * /api/News/socialNews:
 *   get:
 *     summary: Retrieve social news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: A list of social news
 */
router.get('/socialNews', getSocialNews);


module.exports = router;