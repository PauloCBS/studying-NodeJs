const express = require("express");
 //importou o express.

const app = express();
//inicializou o express.
app.use(express.json());
//app.use is necessary to use the json file inside the body of our insomnia body.
const PORT = 3333;
//porta a qual será feita a requisição.


app.post("/user", (req, res) => { 
    
const {name, email, password} = req.body;
//this way we do the request from the json file inside the body of our insomnia body. 
res.send(`Usuário: ${name}. E-mail: ${email}`);
//note that the main difference between route params and query params is that no params is necessary. 
//we can also send the information in different formats eg. json.
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
//app escute a porta 3333 e retorna uma mensagem de que o servidor está rodando na porta 3333.

 