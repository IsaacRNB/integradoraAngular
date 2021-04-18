'use strict'
const MongoSensores = use('App/Models/sensores')
class SensoreController {
    async index({response}){
        const data = await MongoSensores.find({});
        try{
            return response.status(200).json(data);
        }
        catch(e){
          return response.status(400).send({'Error': e})
        }
    }

    async registro({response, request}){
        const data = await MongoSensores.find({})
        try{
    
        
        const {tipo, nombre, pines} = request.only([
            'tipo',
            'nombre',
            'pines'
        ])
        await MongoSensores.create({
            tipo: tipo,
            nombre: nombre,
            pines: pines,
        })
        return response.status(201).send({message: 'Sensor registrado exitosamente'})
    } catch(e){
        return response.status(400).send({'Error': e.toString()})
    }
    }

}

module.exports = SensoreController
