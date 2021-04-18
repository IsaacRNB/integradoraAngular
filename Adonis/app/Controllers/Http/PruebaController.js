'use strict'
const MongoPrueba = use('App/Models/prueba')
class PruebaController {

async index({response}){
    const data = await MongoPrueba.find({});
    try{
        return response.status(200).json(data);
    }
    catch(e){
      return response.status(400).send({'Error': e})
    }
}

async registro({response, request}){
    const data = await MongoPrueba.find({})
    try{

    
    const {nombre, apellido} = request.only([
        'nombre',
        'apellido'
    ])
    await MongoPrueba.create({
        nombre: nombre,
        apellido: apellido,
    })
    return response.status(201).send({message: 'Prueba registrada exitosamente'})
} catch(e){
    return response.status(400).send({'Error': e.toString()})
}
}

}

module.exports = PruebaController
