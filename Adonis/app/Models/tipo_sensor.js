'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')

const {Schema} = mongoose

const Tipos_SensorSchema = new Schema({
  id: String,
  nombre: String,
})

/**
 * @class tipo_sensor
 */
class tipo_sensor extends BaseModel {
  static get schema () {
    return {

    }
  }
}

Tipos_SensorSchema.loadClass(tipo_sensor)

module.exports = mongoose.model('tipo_sensor', Tipos_SensorSchema)