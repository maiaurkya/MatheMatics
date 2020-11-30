const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/', (req, res) => {
 // res.sendFile(path.join(__dirname, 'build', 'index.html'))
res.send('Hello World!')
})

app.listen(8888)

