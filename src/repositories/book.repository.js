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
  return new Promise((res, rej) => {
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
          rej(err)
        } else {
          res({message: 'Book Created'})
        }
      }
    );
  })
}

export default {
  createBookRepository
}
