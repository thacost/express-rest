CREATE TABLE produtos (
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  preco DECIMAL(10, 2),
  data_atualizado DATETIME
);