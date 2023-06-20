const db = require('../configs/db');

exports.getProdutos =(req, res)=>{
    db.query('SELECT * FROM produtos', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

exports.createProdutos =(req, res)=>{
    const {nome, descricao, preco, data_atualizado} = req.body;
    const produto = {nome, descricao, preco, data_atualizado};

    db.query('INSERT INTO produtos SET ?', produto, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

exports.updateProdutos =(req, res)=>{
    const {id} = req.params;
    const {nome, descricao, preco, data_atualizado} = req.body;
    const produto = {nome, descricao, preco, data_atualizado};
    db.query('UPDATE produtos SET ? WHERE id = ?', [produto, id],
    (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

exports.deleteProdutos =(req, res)=>{
    const {id} = req.params;
    db.query('DELETE FROM produtos WHERE id = ?', id, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};
