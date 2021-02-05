const express = require('express');
const getPost = require('../Controllers/routes.js');
const sendPost = require('../Controllers/routes.js');

const router = express.Router();

router.get('/', getPost);
router.post('/create', sendPost);


module.exports = router;