const express = require('express');
const router = express.Router();
module.exports = router;

const queries = require('../db/queries')

router.get('/cars', (req, res) => {
  // res.json([]);
  queries.cars.getAll()
  .then(data => {
    res.json(data)
  })
});
