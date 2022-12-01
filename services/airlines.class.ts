const faker = require('faker');

class Airline {
  IATA_CODE: string;
  AIRPORT: string;
  CITY: string;
  STATE: string;
  COUNTRY: string;
  LATITUDE: number;
  LONGITUDE: number;
}

function createRandomAirline(): Flight {
  const sex = this.faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

const airline = createRandomAirline();
