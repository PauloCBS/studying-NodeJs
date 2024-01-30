class UserController{
//we will use a class because its possible to add many functions inside. A controller can hav only 5 functions

/*
index- GET para listar varios registros
show - GET para exibir um registro especifico
create - POST para criar um registro
update - PUT para atualizar um registro
delete - DELETE para remover um registro
*/


create(req, res){
    
    const {name, email, password} = req.body;
    res.json({name, email, password});
    //this way we do the request from the json file inside the body of our insomnia body. 
    //res.send(`Usuário: ${name}. E-mail: ${email}. Password: ${password}`);
    //note that the main difference between route params and query params is that no params is necessary. 
    //we can also send the information in different formats eg. json.
}


}

module.exports = UserController