const path = require('path');
const express = require('express');
const winston = require('winston');
const helmet = require('helmet');

const app = express();

const PORT = process.env.PORT || 8080;
const disPath = path.join(__dirname, 'dist');
const indexFileName = 'index.html';

app.use(helmet());

app.use(express.static(disPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(disPath, indexFileName));
});

app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`listening on port ${PORT}`);
});
