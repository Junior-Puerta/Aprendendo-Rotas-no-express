import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escutando");
});

app
  .route("/coisas/carros")
  .get((req, res) => {})
  .post((req, res) => {});

app
  .route("/coisas/carros/:CarroId")
  .get((req, res) => {})
  .put((req, res) => {});
