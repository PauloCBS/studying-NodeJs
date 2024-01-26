const express = require("express"); //importou o express.

const app = express();//inicializou o express.
const PORT = 3333;//porta a qual será feita a requisição.

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
//app escute a porta 3333 e retorna uma mensagem de que o servidor está rodando na porta 3333.