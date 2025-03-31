import express from "express"
import BookRouters from "./src/routes/book.routes.js"
import "dotenv/config"
const app = express()

app.use(express.json());
app.use(BookRouters);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});