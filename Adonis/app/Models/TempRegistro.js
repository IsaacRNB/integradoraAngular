'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')

const {Schema} = mongoose

const TempSchema = new Schema({
  sensor_id: Number,
  dato: Number,
  date: {type: Date, default: Date.now}
})
/**
 * @class TempRegistro
 */
class TempRegistro extends BaseModel {
  /**
   * TempRegistro's schema
   */
  static get schema () {
    return {

    }
  }
}

TempSchema.loadClass(TempRegistro)

module.exports = mongoose.model('TempRegistro', TempSchema)
