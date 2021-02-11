const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item.js");

// GET -> /api/items
// desc -> Get Everything
// access -> Everyone
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) //Most recent
    .then((items) => res.json(items));
});

// POST -> /api/items
// desc -> Create
// access -> Everyone
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

// DELETE -> /api/items/:id
// desc -> Delete
// access -> Everyone
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then((item) => res.send(item)))
    .catch((err) => res.status(404).send(`Erro: ${err}`));
});

module.exports = router;
