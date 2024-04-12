const express = require("express");
const router = express.Router();

// obter todos os pedidos
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retornou todos os pedidos",
  });
});

// inserir um pedido
router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Pedido realizado",
  });
});

// obter um pedido específico
router.get("/:id_pedido", (req, res, next) => {
  const id = req.params.id_pedido;
  res.status(200).send({
    message: "Retornou um pedido",
    id: id,
  });
});

// excluir um pedido
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Pedido apagado",
  });
});

module.exports = router;
