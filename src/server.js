const express = require("express");
 //importou o express.

const app = express();
//inicializou o express.
const PORT = 3333;
//porta a qual será feita a requisição.


app.post("/user", (req, res) => { 
    
res.send("You have called the POST method");
//note that the main difference between route params and query params is that no params is necessary. 
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
//app escute a porta 3333 e retorna uma mensagem de que o servidor está rodando na porta 3333.

 