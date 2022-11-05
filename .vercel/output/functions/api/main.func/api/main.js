const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
    res.return('shit is working!?!')
  })

module.exports = router;