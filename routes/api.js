import express from 'express';
import fetchBlogData from '../middleware/apiMiddleware.js';
import * as blogStatsController from '../controllers/blogStatsController.js';
import * as blogSearchController from '../controllers/blogSearchController.js';

const router = express.Router();

router.get('/blog-stats', fetchBlogData, blogStatsController.getBlogStats);

router.get('/blog-search', fetchBlogData, blogSearchController.searchBlogs);

export default router;
