'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerritoSchema extends Schema {
  up () {
    this.create('perritos', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.string('foto', 250).notNullable()
      table.string('due', 80).references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('perritos')
  }
}

module.exports = PerritoSchema
