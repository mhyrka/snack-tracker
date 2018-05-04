
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        {name: 'Cheese Straws', sweet: false, quality: 1},
        {name: 'Apple', sweet: true, quality: 5},
        {name: 'Meat-Stick', sweet: false, quality: 4}
      ])
    })
}
