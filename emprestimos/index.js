const express = require('express');
const bodyParser = require('body-parser');
const passwordHash = require('password-hash');
const mongoose = require('mongoose');
const ClienteSchema = require('./schemas/cliente');


const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/emprestimo")

app.get('/hello', (request, response) =>{
    response.status(200).send('Hello World')

})

app.post('/cliente', (request, response) => {
    let cliente = new ClienteSchema(request.body);
    cliente.senha = passwordHash.generate(request.body.senha);
    cliente.save((error, resultado) => {
        if(error){
            response.status(400).send(error);
            return;
        }

        response.status(201).send(resultado);
    });
});


app.listen(3000, () => {
    console.log('Servidor inicializado');
});
