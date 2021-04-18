'use strict'

const { dates } = require("@adonisjs/lucid/src/Lucid/Model")

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')
const {Schema} = mongoose

const UserMDBSchema = new Schema(
  {
    id: String,
    usuario: String,
    password: String,
    date: {type: Date, default: Date.now}
  }
)
/**
 * @class UserMDB
 */
class UserMDB extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserMDBHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  static get schema () {
    return {

    }
  }
}

UserMDBSchema.loadClass(UserMDB)
module.exports = mongoose.model('UserMDB', UserMDBSchema)
