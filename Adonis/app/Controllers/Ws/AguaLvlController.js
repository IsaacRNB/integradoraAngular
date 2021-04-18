'use strict'
const MongoAgua = use('App/Models/AguaRegistro')
class AguaLvlController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data){
    MongoAgua.create({
      sensor_id: data.sensor_id,
      dato: data.dato
  })
  this.socket.broadcastToAll("message", data)
    console.log(this.socket.id)
    console.log(data)
  }
}

module.exports = AguaLvlController
