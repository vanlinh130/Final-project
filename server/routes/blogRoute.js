const express = require('express');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const { createBlog } = require('../controller/blogCtrl');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createBlog);

module.exports = router;
