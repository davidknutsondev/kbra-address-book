/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */

module.exports = function generateFakeDatabase() {
  const { faker } = require('@faker-js/faker');
  var lodash = require('lodash');

  return {
    contacts: lodash.times(25, function generateFakeAddressEntries(n) {
      return {
        id: n,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.internet.avatar(),
        address: faker.address.streetAddress(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('908-###-###'),
      };
    }),
  };
};
