'use strict'
const MongoAgua = use('App/Models/AguaRegistro')

class AguaController {
    async index({response}){
        const data = await MongoAgua.find({});
        try{
            return response.status(200).json(data);
        }
        catch(e){
          return response.status(400).send({'Error': e})
        }
    }
    
    async registro({response, request}){
        const data = await MongoAgua.find({})
        try{
    
        
        const {sensor_id, datos} = request.only([
            'sensor_id',
            'dato'
        ])
        await MongoAgua.create({
            sensor_id: sensor_id,
            datos: datos,
        })
        return response.status(201).send({message: 'Datos registrados'})
    } catch(e){
        return response.status(400).send({'Error': e.toString()})
    }
    }

}

module.exports = AguaController
