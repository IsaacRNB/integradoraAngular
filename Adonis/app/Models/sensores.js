'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')

const {Schema} = mongoose

const SensoresSchema = new Schema({
  tipo: String,
  nombre: String,
  pines: String
})

/**
 * @class sensores
 */
class sensores extends BaseModel {
  static get schema () {
    return {}
  }
}

SensoresSchema.loadClass(sensores)

module.exports = mongoose.model('sensores', SensoresSchema)