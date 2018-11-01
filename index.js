const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect(
  'mongodb://localhost/testdb',
  { useNewUrlParser: true },
);

const excel = require('./excel');

const init = async () => {
  mongoose.connection.once('open', () => {
    excel.importData();
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

init();
