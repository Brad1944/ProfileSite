const express = require("express");
const router = express.Router();

router.set('view engine', 'ejs')

router.get('/', async (req, res) => {
    res.render('index')
  })

module.exports = router;