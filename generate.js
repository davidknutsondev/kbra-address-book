/* eslint-disable global-require */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
module.exports = function generateFakeDatabase() {
  const { faker } = require('@faker-js/faker');
  var lodash = require('lodash');

  return {
    people: lodash.times(100, function generateFakeAddressEntries(n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      };
    }),
  };
};
