const express = require("express");
 //importou o express.

 const routes = require("./routes");
//it is not necessary  to add the index page becaus it is a standard behavior.


const app = express();
//inicializou o express.
app.use(express.json());
//app.use is necessary to use the json file inside the body of our insomnia body.


app.use(routes);


const PORT = 3333;
//porta a qual será feita a requisição.
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
//app escute a porta 3333 e retorna uma mensagem de que o servidor está rodando na porta 3333.

 