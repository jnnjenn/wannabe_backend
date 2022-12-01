const faker = require('faker');


class Airport {
  IATA_CODE: string;
  AIRLINE: string;
}

function createRandomAirport(): Airport {
  return {
    IATA_CODE: faker.datatype.string(5),
    AIRLINE: faker.name.lastName()
  };
}

const airport = createRandomAirport();
