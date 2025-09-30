const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.post("/", petController.criarPet);
router.get("/", petController.listarPets);
router.get("/:id", petController.buscarPet);
router.put("/:id", petController.atualizarPet);
router.delete("/:id", petController.deletarPet);

module.exports = router;
