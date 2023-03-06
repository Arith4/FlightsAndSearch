const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const setUpAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
};

setUpAndStartServer();
