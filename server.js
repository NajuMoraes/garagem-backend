// Importação do Express
const express = require('express');
const app = express();

// Importação das rotas
const clienteRotas = require('./routes/Cliente');
const veiculoRotas = require('./routes/Veiculo');

// Definição da porta do servidor
const hostname = '127.0.0.1';
const port = 8080;

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de gerenciamento de garagem!');
});

// Usar as rotas
app.use('/clientes', clienteRotas);
app.use('/veiculos', veiculoRotas);

// Rodar o servidor
app.listen(port, hostname, () => {
    console.log(`O servidor está rodando em http://localhost:8080/`);
});




    

