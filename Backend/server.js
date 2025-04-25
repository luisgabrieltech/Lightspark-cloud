const express = require("express");
const cors = require("cors");
const path = require("path");
const campanhas = require("./campanhas");

const app = express();
const port = process.env.PORT || 8585;

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do Frontend
app.use(express.static(path.join(__dirname, "../Frontend")));

// Rota principal para abrir o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

// API de monitoramento
app.get("/api/status", (req, res) => {
  res.json({ status: "API online", timestamp: new Date() });
});

// Lista todas as campanhas
app.get("/api/campanhas", (req, res) => {
  res.json(campanhas);
});

// Adiciona nova campanha
app.post("/api/campanhas", (req, res) => {
  const nova = req.body;
  campanhas.push(nova);
  res.status(201).json({ mensagem: "Campanha adicionada com sucesso!" });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API da LightSpark rodando na porta ${port}`);
});
