'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')

const {Schema} = mongoose

const CroquetaSchema = new Schema({
  sensor_id: Number,
  dato: Number,
  date: {type: Date, default: Date.now}
})

/**
 * @class CroquetasRegistro
 */
class CroquetasRegistro extends BaseModel {
  /**
   * CroquetasRegistro's schema
   */
  static get schema () {
    return {

    }
  }
}

CroquetaSchema.loadClass(CroquetasRegistro)

module.exports = mongoose.model('CroquetasRegistro', CroquetaSchema)
