const express = require("express");
const router = express.Router();

// obter todos os produtos
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retornou todos os produtos",
  });
});

// inserir um produto
router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Produto adicionado",
  });
});

// obter um produto específico
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;
  res.status(200).send({
    message: "Produto obtido",
    id: id,
  });
});

// atualizar um produto específico
router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Produto alterado com sucesso",
  });
});

// excluir um produto
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Produto excluído com sucesso",
  });
});

module.exports = router;
