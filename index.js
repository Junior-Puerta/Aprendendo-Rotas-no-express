import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escutando");
});

app.get("/coisas/carros", (req, res) =>
  res.send("Você está no diretório /coisas/carros")
);

app.get("/coisas/carros/:CarroId", (req, res) => {});

app.post("/coisas/carros", (req, res) => {});

app.put("/coisas/carros/CarroId", (req, res) => {});
