import express from "express"
import "dotenv/config"
const app = express()

app.get('/hello', function (req, res) {
  res.send('Desafio_05 DNC')
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});