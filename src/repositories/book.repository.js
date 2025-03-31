import db from "../config/database.js";



db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL,
    titulo TEXT NOT NULL,
    numero_de_paginas INTEGER,
    codigo_ISBN TEXT,
    editora TEXT NOT NULL
  )`);


function createBookRepository(newBook) {
  return new Promise((resolve, reject) => {
    const {autor, titulo, numero_de_paginas, codigo_ISBN, editora} = newBook 
    db.run(
      `
        INSERT INTO users (author, titulo, numero_de_paginas, codigo_ISBN, editora)
        VALUES (?, ?, ?, ?, ?)
      `,
      [
        autor,
        titulo,
        numero_de_paginas,
        codigo_ISBN,
        editora
      ], (err) => {
        if (err) {
          reject(err)
        } else {
          resolve({id: this.lastID, ...newBook})
        }
      }
    );
  })
}

function findAllBooksRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM books`, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function findByIdBookRepository(bookId) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM books WHERE id = ?`, [bookId], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row)
      }
    });
  });
 }

function updateBookRepository() {

}

function deleteBookRepository(bookId) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE * FROM books WHERE id = ?`, [bookId], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ message: "Book deleted successfully", bookId });
      }
    });
  });
}




export default {
  createBookRepository,
  findAllBooksRepository,
  findByIdBookRepository,
  updateBookRepository,
  deleteBookRepository
};
