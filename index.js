const express = require('express')
const app = express()
const main = require("./api/main")
const port = process.env.PORT || 8080;


app.use(express.json({ extended: false }));
app.set('view engine', 'ejs')
app.use("/api/main", main)
app.use(express.static(__dirname + '/public'));



app.listen(port, () => {
  console.log(`Website running on port ${port} 🤙`)
})