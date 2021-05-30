const express = require('express');
const router = express.Router();

// authentication middleware
const authenticationMiddleware = (req, res, next) => {
    console.log('Request is being authenticated...');
    next();
};
// example middleware
const exampleMiddleware = (req, res, next) => {
    console.log('Example middleware is being launched...');
    next();
};

// router middlewares
router.use([authenticationMiddleware, exampleMiddleware]);

// routes
router.get('/', (req, res) => {
    res.send('Index page');
});

router.get('/about', (req, res) => {
    res.send('About page');
});

module.exports = router;
