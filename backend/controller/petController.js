const Pet = require("../models/petModel");

// Criar novo pet
exports.criarPet = async (req, res, next) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (err) {
    next(err);
  }
};

// Listar todos os pets
exports.listarPets = async (req, res, next) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    next(err);
  }
};

// Buscar um pet por ID
exports.buscarPet = async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet não encontrado" });
    res.json(pet);
  } catch (err) {
    next(err);
  }
};

// Atualizar pet
exports.atualizarPet = async (req, res, next) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pet) return res.status(404).json({ message: "Pet não encontrado" });
    res.json(pet);
  } catch (err) {
    next(err);
  }
};

// Deletar pet
exports.deletarPet = async (req, res, next) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet não encontrado" });
    res.json({ message: "Pet removido com sucesso" });
  } catch (err) {
    next(err);
  }
};
