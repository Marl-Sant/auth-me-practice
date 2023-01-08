// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require("./API")

router.use('/api', apiRouter)

router.get('/api/csrf/retore', (req, res) => {
    const csrfToken = req.csrfToken()
  res.cookie('XSRF-TOKEN', csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  })
});

module.exports = router;
