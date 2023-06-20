exports.validacaoCliente = (req, res, next) => {
    const {nome, sobrenome, email, idade} = req.body;

    if (!nome || !sobrenome || !email || !idade) {
        return res.status(400).json({error: 'CAMPO INVÁLIDO!'});
    }
    next();
};

exports.validacaoProduto = (req, res, next) => {
    const {nome, descricao, preco, data_atualizado} = req.body;

    if (!nome || !descricao || !preco || !data_atualizado) {
        return res.status(400).json({error: 'CAMPO INVÁLIDO!'});
    }
    next();
};

