'use strict'
const MongoTipos = use('App/Models/tipo_sensor')

class TipoController {

    async index({response}){
        const data = await MongoTipos.find({});
        try{
            return response.status(200).json(data);
        }
        catch(e){
          return response.status(400).send({'Error': e})
        }
    }

    async registro({response, request}){
        const data = await MongoTipos.find({})
        try{
    
        
        const {id, nombre} = request.only([
            'id',
            'nombre'
        ])
        await MongoTipos.create({
            id: id,
            nombre: nombre
        })
        return response.status(201).send({message: 'Tipo de sensor registrado exitosamente'})
    } catch(e){
        return response.status(400).send({'Error': e.toString()})
    }
    }
}

module.exports = TipoController
