'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Hash = use('Hash')

const Model = use('Model')

class Dispensador extends Model {
    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (dispensaInstance) => {
          if (dispensaInstance.dirty.codigo) {
            dispensaInstance.codigo = await Hash.make(dispensaInstance.codigo)
          }
        })
      }

      static get hidden(){
        return ['codigo', 'created_at', 'updated_at']
      }

      usuario(){
        this.belongsTo('App/Models/User')
    }
}

module.exports = Dispensador
