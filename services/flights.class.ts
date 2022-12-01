const faker = require('faker');


class Flight {
  AIRLINE: string;
  FLIGHT_NUMBER: number;
  ORIGIN_AIRPORT: string;
  DESTINATION_AIRPORT: string

  YEAR: number;
  MONTH: number;
  DAY: number;
  TAIL_NUMBER: string;
  SCHEDULED_DEPARTURE: number;
  DEPARTURE_TIME: number;
  DEPARTURE_DELAY: number;
  TAXI_OUT: number;
  WHEELS_OFF: number;
  SCHEDULED_TIME: number;
  ELAPSED_TIME: number;
  AIR_TIME: number;
  DISTANCE: number;
  WHEELS_ON: number;
  TAXI_IN: number;
  SCHEDULED_ARRIVAL: number;
  ARRIVAL_TIME: number;
  ARRIVAL_DELAY: number;
  DIVERTED: number;
  CANCELLED: number;
  CANCELLATION_REASON: string;
  AIR_SYSTEM_DELAY: number;
  SECURITY_DELAY: number;
  AIRLINE_DELAY: number;
  LATE_AIRCRAFT_DELAY: number;
  WEATHER_DELAY: number;
}

function createRandomUser(): Flight {
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

const user = createRandomUser();
