const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  especie: { type: String, required: true },
  raca: { type: String },
  idade: { type: Number },
  dono: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Pet", petSchema);
