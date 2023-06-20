const db = require('../configs/db');

exports.getClientes = (req, res) => {
    db.query('SELECT * FROM clientes', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

exports.createCliente = (req, res) => {
    const {nome, sobrenome, email, idade} = req.body;
    const cliente = {nome, sobrenome, email, idade};
    db.query('INSERT INTO clientes SET ?', cliente, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

exports.updateCliente = (req, res) => {
    const {id} = req.params;
    const {nome, sobrenome, email, idade} = req.body;
    const cliente = {nome, sobrenome, email, idade};
    db.query('UPDATE clientes SET ? WHERE id = ?', [cliente, id],
    (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

exports.deleteCliente = (req, res) => {
    const {id} = req.params;
    db.query('DELETE FROM clientes WHERE id = ?', id, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};
