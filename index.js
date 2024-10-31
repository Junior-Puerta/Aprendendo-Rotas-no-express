import express from "express";
import coisas from "./routes/coisas.js";

const app = express();

app.use(express.json());
app.use("/coisas", coisas);

const PORT = 3000;

app.get("/",(req,res)=>{

})

app.listen(PORT, () => {
  console.log("Servidor escutando");
});

