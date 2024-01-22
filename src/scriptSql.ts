const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const executeScript = async () => {
  try {
    // Leia o conteúdo do seu arquivo SQL
    const path = require("path");
    const sqlScript = fs.readFileSync(path.join(__dirname, "db.sql"), "utf8");

    // Conecte ao banco de dados e execute o script SQL
    await pool.query(sqlScript);

    console.log("Script SQL executado com sucesso.");
  } catch (error: any) {
    console.error("Erro ao executar o script SQL:", error.message);
  } finally {
    // Encerre a conexão com o pool
    await pool.end();
  }
};

executeScript();
