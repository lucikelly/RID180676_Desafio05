import bookRepository from "../repositories/book.repository.js";


async function createBookService(newBook) {
  const book = await bookRepository.createBookRepository(newBook);
  if (!book) throw new Error("error creating book");
  return book;
}

async function findAllBooksService() {
  const books = await bookRepository.findAllBooksRepository();
  return books;
}

async function findByIdBookService(bookId) { 
  const book = await bookRepository.findByIdBookRepository(bookId);
  if (!book) throw new Error("book not found");
  return book;
}

async function updateBookService() {

}

async function deleteBookService(bookId) {
  const book = await bookRepository.findByIdBookRepository(bookId);
  if (!book) throw new Error("book not found");
  const response = await bookRepository.deleteBookRepository(bookId);
  return response;
}



export default {
  createBookService,
  findAllBooksService,
  findByIdBookService,
  updateBookService,
  deleteBookService,
};