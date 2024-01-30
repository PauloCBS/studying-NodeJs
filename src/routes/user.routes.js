const {Router} = require("express");

const userRoutes = Router();

userRoutes.post("/", (req, res) => { 
    
    const {name, email, password} = req.body;
    res.json({name, email, password});
    //this way we do the request from the json file inside the body of our insomnia body. 
    //res.send(`Usuário: ${name}. E-mail: ${email}. Password: ${password}`);
    //note that the main difference between route params and query params is that no params is necessary. 
    //we can also send the information in different formats eg. json.
    })

module.exports = userRoutes;