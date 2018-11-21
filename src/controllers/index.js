import fs from "fs";
import express from "express";
const router = express.Router();
import * as importp from "../services/importPizza"


router.get("/", (req, res) => {
  let pizza = importp.importPizza("src/storage/pizzas.json");
  res.render("index", pizza);
});

router.post("/", (req, res) => {
  const { nompizza, ingredients, prix, image } = req.body;
  console.log({ nompizza, ingredients, prix, image })
  res.render("formulaire", { nompizza, ingredients, prix, image });
});

router.get("/formulaire", (req, res) => {

});

export default router;
