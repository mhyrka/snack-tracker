
exports.up = function(knex, Promise) {
  return knex.schema.createTable('snacks', table => {
    table.increments('id')
    table.text('name')
    table.boolean('sweet')
    table.float('quality')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('snacks')
}
