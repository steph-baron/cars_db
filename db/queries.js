const knex = require('./knex')

module.exports = {
  cars: {
    getAll: function () {
      return knex('car');
    }
  }
}
