'use strict'
const MongoSensores = use('App/Models/sensores')
class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(request){
    MongoSensores.create({
      tipo: request.tipo,
      nombre: request.nombre,
      pines: request.pines,
  })
    console.log(this.socket.id)
    console.log(request)
  }
}

module.exports = ChatController
