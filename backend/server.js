import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/profile", authMiddleware, async (req, res) => {
  return res.json({ message: "Acesso permitido", user: req.user });
});

app.get("/", (req, res) => res.send("API ok"));

const MONGO = process.env.MONGO_URI;
mongoose
  .connect(MONGO, {})
  .then(() => {
    console.log("MongoDB Atlas conectado");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  })
  .catch((err) => {
    console.error("Erro ao conectar no MongoDB:", err);
    process.exit(1);
  });
