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
})

router.get('/cars/:id', (req, res) => {
  queries.cars.getOne(req.params.id)
  .then(data => {
    res.json(data)
  })
})

router.post('/cars', (req, res) => {
  queries.cars.create(req.body)
  .then(data => {
    res.send(data[0])
  });
});
