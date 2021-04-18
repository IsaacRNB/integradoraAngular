'use strict'
const User = use('App/Models/User')
const Perro = use('App/Models/Perrito')
class UserController {
//===================================== REGISTRAR USUARIOS =======================================
    async crear({request, response}){
        const data = request.only(['usuario', 'password'])
        const user = await User.create(data)
        return response.created({
            message: "Usuario registrado",
            usuario: user
        })
    }
//===================================== ACTUALIZAR USUARIOS =======================================
    async actualizar({ request,response,auth}){
        const {usuario} = await request.only(['usuario'])
        const {password} = await request.only(['password'])

        let user = await auth.getUser()

        if (!user.id) {
          return response.status(400).send(false)
        }

        user.usuario = usuario
        user.password = password

        if (!await user.save()) {
          return response.status(500).send(false)
        }

        return response.status(200).send("Usuario actualizado correctamente")
    }
 //===================================== SELECT USUARIOS =======================================
    async getusuarios({response}){
        const usuario = await User.query().fetch()
        return response.ok({
            status: true,
            data: usuario
        })
    }


    
    async getUsuarioWithPerro({response, request}){
      const data = request.all();
      const usuario = await User.Perro().where('id', data.id).fetch();

      const query = usuario.count();
      if(query > 1){
          return response.ok({
            status: true,
            data: usuario,
            pase: true
        })
      } else {
        return response.ok({
          status: true,
          data: usuario,
          pase: false
      })
      }
    }
}

module.exports = UserController