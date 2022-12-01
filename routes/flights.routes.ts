const express = require('express');
const router = express.Router();

const faker = require('faker');

// Route to get all the flights
router.get('/', (req, res) => {
  const flights = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    flights.push({
      id : faker.commerce.
    });

  }

});
