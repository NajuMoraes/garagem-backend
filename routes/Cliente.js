const express = require('express');
const router = express.Router();

// Rota GET para listar clientes
router.get('/', (req, res) => {
  res.send('Você está na rota GET para listar os clientes.');
});

// Rota POST para adicionar um cliente
router.post('/', (req, res) => {
  res.send('Você está na rota POST para adicionar um novo cliente.');
});

// Rota PUT para atualizar um cliente
router.put('/:id', (req, res) => {
  res.send('Você está na rota PUT para atualizar o cliente com ID ' + req.params.id);
});

// Rota DELETE para remover um cliente
router.delete('/:id', (req, res) => {
  res.send('Você está na rota DELETE para remover o cliente com ID ' + req.params.id);
});

module.exports = router;
