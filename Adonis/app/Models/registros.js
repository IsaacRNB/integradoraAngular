'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')

const {Schema} = mongoose

const RegistrosSchema = new Schema({
  sensor_id: Number,
  datos: Number,
  date: {type: Date, default: Date.now}
})

/**
 * @class registros
 */
class registros extends BaseModel {
  /**
   * registros's schema
   */
  static get schema () {
    return {

    }
  }
}

RegistrosSchema.loadClass(registros)

module.exports = mongoose.model('registros', RegistrosSchema)
