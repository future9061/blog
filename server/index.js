const express = require('express')
const app = express()
const port = 5000
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

