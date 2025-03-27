import express from "express"
const app = express()

app.get('/hello', function (req, res) {
  res.send('Desafio_05 DNC')
})

app.listen(3000, ()=> console.log("Server is running on port 3000"))