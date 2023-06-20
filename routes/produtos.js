const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const {validacaoProduto} = require('../middlewares/validacoes');

router.get('/', produtosController.getProdutos);
router.post('/', validacaoProduto, produtosController.createProdutos);
router.put('/:id', validacaoProduto, produtosController.updateProdutos);
router.delete('/:id', validacaoProduto, produtosController.deleteProdutos);

module.exports = router;
