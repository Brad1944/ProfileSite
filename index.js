const express = require('express')
const app = express()
var path = require('path');
const main = require("./api/main")
const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, '/views'));
app.use(express.json({ extended: false }));
app.set('view engine', 'ejs')
app.use("/api/main", main)
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Website running on port ${port} 🤙`)
})