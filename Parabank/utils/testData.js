import { faker } from '@faker-js/faker';

export const userData = {

    firstName: faker.person.firstName(),

    lastName: faker.person.lastName(),

    address: faker.location.streetAddress(),

    city: faker.location.city(),

    state: faker.location.state(),

    zipCode: faker.location.zipCode(),

    phone: faker.phone.number(),

    ssn: faker.string.numeric(9),

    username: faker.internet.username(),

    password: 'admin@123'
};