const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Routes
const items = require("./routes/api/items.js")

//Body-parser
app.use(express.json());

//user: rodrigo
//senha: 12345

// DB Config
const mongoURI = require("./config/keys.js").mongoURI

//Connect
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(`Erro: ${err}`));

//Activating the routes
app.use('/api/items', items);

//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening ${port}`));
