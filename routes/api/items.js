const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../models/Item.js");

//=================ROUTES==================

// GET -> /api/items
// desc -> Get All Item's
// access -> Everyone
router.get("/", (req, res) => {
  Item.find() // Query all the documents with the Item schema(mongoose)
    .sort({ date: -1 }) //Sort by the most recent
    .then((items) => res.json(items));// Send the documents in JSON format
});
// GET -> /api/items
// desc -> Get All Item's
// access -> Everyone
router.get("/:id", (req, res) => {
  Item.findById(req.params.id) //Get the item by id on the url
    .then((item) => res.json(item));// Send the documents in JSON format
});

// POST -> /api/items
// desc -> Create an Item
// access -> Everyone
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  }); // Clones the Item Schema and uses the req.body.name as the Item name

  newItem.save().then((item) => res.json(item));// Saves this clone and send it in JSON
});

// DELETE -> /api/items/:id
// desc -> Delete an Item
// access -> Everyone
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id) // Querries for the post using the id in the url
    .then((item) => item.remove().then((item) => res.send(item)))//Remove it and send in JSON
    .catch((err) => res.status(404).send(`Erro: ${err}`));//Error 404 verifier
});

module.exports = router;
