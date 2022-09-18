const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Website running on port ${port} 🤙`)
})