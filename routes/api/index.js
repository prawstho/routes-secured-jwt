var router = require('express').Router();
const {setToken, authenticateJWT } = require('../../services/auth');

if(DEBUG) {
    console.log('ROUTE: /api/auth');
}

// Use the setToken middleware to set the JWT token from the session
router.use(setToken);

// Protect all API routes with the authenticateJWT middleware
router.use(authenticateJWT);

// http://localhost:3000/api/auth/
const authRouter = require('./auth')
router.use('/auth', authRouter);

module.exports = router;