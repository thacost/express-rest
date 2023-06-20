const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const httpErrors = require('http-errors');
require('dotenv').config({path: 'variaveis.env'});
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const indexRouter = require('../routes/index');
const clientesRouter = require('../routes/clientes');
const produtosRouter = require('../routes/produtos');

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

app.use((req, res, next) => {
  next(httpErrors(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
