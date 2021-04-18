'use strict'
const Perrito = use('App/Models/Perrito')
class PerritoController {
//===================================== REGISTRAR PERRITOS =======================================
    async crear({request, response, auth}){
        const data = request.only(['nombre'])

        const imagen = request.file('foto', {
            types: ['image'],
            size: '2mb'
          })
          const nombreF = data['nombre'] + "." + imagen.extname;

          await imagen.move('./public/fotosperritos', {
            name: nombreF,
            overwrite: true
          })

          if(! imagen.moved())
          {
              return response.status(422).send({
                  res:false,
                  message: foto.error()
              })
          }

        const usuario = await auth.getUser()
        const perr = new Perrito()
        perr.nombre = data['nombre']
        perr.foto = nombreF
        perr.due = usuario['id']
        await perr.save()
        return response.created({
            data,due:usuario
        })
    }
//===================================== ACTUALIZAR PERRITOS =======================================
    async actualizar({request,response}){
        const data = request.only(['id','nombre', 'foto'])
        const posto = new Perrito()
        posto.id = data['id']
        posto.nombre = data['nombre']
        
        const imagen = request.file('foto', {
            types: ['image'],
            size: '2mb'
          })

          const nombreF = data['nombre'] + "." + imagen.extname;
          await imagen.move('./public/fotosperritos', {
            name: nombreF,
            overwrite: true
          })

          if(! imagen.moved())
          {
              return response.status(422).send({
                  res:false,
                  message: foto.error()
              })
          }
        
        if (await Perrito.query()
        .where('id', posto.id)
        .update({'nombre': posto.nombre, 'foto': nombreF, 'updated_at': Date()})){
         return response.status(200).json({
             status: true,
             message: "Los datos del perrito han sido actualizados"
         })
        }
        return response.status(400).json({
            status: false,
             message: "No se han podido actualizar los datos del perrito"
        })
    }
    //=====================================SELECT PERRITOS =======================================
    async getperritos({response, auth}){
        const usuario = await auth.getUser()
        const data = usuario.id
        const num = await Perrito.query().where('due', data).getCount()
        const perrito = await Perrito.query().where('due', data).fetch()

        if(num < 1){
            return response.ok({
                status:  true,
                message: "Usted no ha registrado perros aún"
            })
        }
        return response.ok({
            status: true,
            data: perrito
        })
    }
    //================================================DELETE PERRITO=================================
    async delete({ params , response}){
        const id = params.id
        const perro = await Perrito.find(id)
        if(await perro.delete()){
            return response.status(200).json({
                status: true,
                message: "Perrito eliminado correctamente"
            })
        }
        return response.status(400).json({
            status: false,
             message: "No se pudo eliminar el perrito"
        })
    }



    async actualizar2({request,response}){
        const data = request.only(['nombre', 'foto'])
        const posto = new Perrito()
        posto.nombre = data['nombre']
        
        const imagen = request.file('foto', {
            types: ['image'],
            size: '2mb'
          })

          const nombreF = data['nombre'] + "." + imagen.extname;
          await imagen.move('./public/fotosperritos', {
            name: nombreF,
            overwrite: true
          })

          if(! imagen.moved())
          {
              return response.status(422).send({
                  res:false,
                  message: foto.error()
              })
          }
        
        if (await Perrito.query()
        .update({'nombre': posto.nombre, 'foto': nombreF, 'updated_at': Date()})){
         return response.status(200).json({
             status: true,
             message: "Los datos del perrito han sido actualizados"
         })
        }
        return response.status(400).json({
            status: false,
             message: "No se han podido actualizar los datos del perrito"
        })
    }
}

module.exports = PerritoController
