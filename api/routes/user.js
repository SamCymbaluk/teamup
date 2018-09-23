const express = require('express');

const user = function User(db) {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('Hello world');
  });

  return router;
};

module.exports = user;
