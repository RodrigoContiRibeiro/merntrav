const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Routes
const items = require("./routes/api/items.js")

//Body-parser
app.use(express.json());

//user: rodrigo
//senha: 12345

// DB URI
const mongoURI = require("./config/keys.js").mongoURI
//Imports the URI with the credentials

//Connect to the server using the URI with mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))//Signals that the connection is okay
  .catch((err) => console.log(`Erro: ${err}`));//Connection error verifier

//Activating the routes
app.use('/api/items', items);// Using the routes in the /api/items as root

//PORTs
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening ${port}`));
//Signals the port to be listen