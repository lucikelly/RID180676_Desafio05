import bookService from "../service/book.service.js";

async function createBookController (req, res) {
  const newBook = req.body;

  try {
    const book = bookService.createBookService(newBook);
    return res.status(201).send({book})
  } catch (err) {
    return res.status(400).send(err.message)
  }
}


async function findAllBooksController(req, res) {
  
  try {
    const books = await bookService.findAllBooksService();
    return res.send(books)
    
  } catch (err) {
    return res.status(400).send(err.message);
  }
}

async function findByIdBookController(req, res) {
  const bookId = req.params.id;

  try {
    const book = await bookService.findByIdBookService(bookId);
    res.send(book);
  } catch (err) {
    res.status(400).send(err.message);
  }

}


async function updateBookController(req, res) {


  try {
  } catch (err) {}
}

async function deleteBookController(req, res) {
  const bookId = req.params.id;

  try {
    const response = await bookService.deleteBookService(bookId);
    return res.send(response);
  } catch (err) {
    return res.status(400).send(err.message);
  }
}


export default {
  createBookController,
  findAllBooksController,
  findByIdBookController,
  updateBookController,
  deleteBookController
}; 