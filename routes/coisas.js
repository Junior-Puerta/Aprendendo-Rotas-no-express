import express from "express";

const router = express.Router();

router.use(function(req,res,next){
console.log(req.url + " @ " +  Date.now());
    next();
})

router
  .route("/carros")
  .get((req, res) => {
    res.send("Hi get /coisas/carros");
  })
  .post((req, res) => {
    res.send("Hi post /coisas/carros");
  });

router
  .route("/carros/:CarroId")
  .get((req, res) => {
    res.send("Hi get /coisas/carros/" + req.params.CarroId);
  })
  .put((req, res) => {
    res.send("Hi put  /coisas/carros/" + req.params.CarroId);
  });

export default router;
