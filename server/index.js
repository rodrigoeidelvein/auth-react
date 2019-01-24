// Starting point of app
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// DB Setup
mongoose
  .connect(
    "mongodb://admin:fazenda123@ds033103.mlab.com:33103/teste_crud",
    { useNewUrlParser: true }
  )
  .catch(erro => {
    console.log(erro);
  });

// App Setup
app.use(morgan("combined"));
app.use(cors())
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log("server listening on ", port);
