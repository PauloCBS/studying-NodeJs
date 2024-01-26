const express = require("express");
 //importou o express.

const app = express();
//inicializou o express.
const PORT = 3333;
//porta a qual será feita a requisição.

//testando metodo GET: onde o / representa a rota que será acessada no navegador, (reques, response) representa a função 
app.get("/message/:id", (req, res) => {
    res.send(`request id ${req.params.id}`);
});
//res serve para devolver uma resposta. Podemos usar o req para enviar ou obter informações. 


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
//app escute a porta 3333 e retorna uma mensagem de que o servidor está rodando na porta 3333.