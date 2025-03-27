import sqlite3 from "sqlite3"

const db = new sqlite3.Database('library_db.sqlite', (err) => {
  if (err) {
    console.error('Erro ao conectar o banco de dados: ', err.message)
  } else {
    console.log('Conectado com sucesso ao Banco de dados')
  }
  
})

export default db