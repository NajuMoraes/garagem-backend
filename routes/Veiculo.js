const express = require('express');
const router = express.Router();

// Rota GET para listar veículos
router.get('/', (req, res) => {
  res.send('Você está na rota GET para listar os veículos.');
});

// Rota POST para adicionar um veículo
router.post('/', (req, res) => {
  res.send('Você está na rota POST para adicionar um novo veículo.');
});

// Rota PUT para atualizar um veículo
router.put('/:id', (req, res) => {
  res.send('Você está na rota PUT para atualizar o veículo com ID ' + req.params.id);
});

// Rota DELETE para remover um veículo
router.delete('/:id', (req, res) => {
  res.send('Você está na rota DELETE para remover o veículo com ID ' + req.params.id);
});

module.exports = router;
