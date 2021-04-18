'use strict'
const MongoTemp = use('App/Models/TempRegistro')

class TemperaturaController {
    async index({response}){
        const data = await MongoTemp.find({});
        try{
            return response.status(200).json(data);
        }
        catch(e){
          return response.status(400).send({'Error': e})
        }
    }
}

module.exports = TemperaturaController
