'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')
const {Schema} = mongoose

const AguaSchema = new Schema({
  sensor_id: Number,
  dato: Number,
  date: {type: Date, default: Date.now}
})

class AguaRegistro extends BaseModel {
  static get schema () {
    return {

    }
  }
}
AguaSchema.loadClass(AguaRegistro)

module.exports = mongoose.model('AguaRegistro', AguaSchema)
