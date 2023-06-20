const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const {validacaoCliente} = require('../middlewares/validacoes');

router.get('/', clientesController.getClientes);
router.post('/', validacaoCliente, clientesController.createCliente);
router.put('/:id', validacaoCliente, clientesController.updateCliente);
router.delete('/:id', validacaoCliente, clientesController.deleteCliente);

module.exports = router;
