'use strict'

class AguaController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data){
    this.socket.broadcastToAll("message", data)
    var accion = data
    console.log(this.socket.id)
    console.log(accion)
  }
}

module.exports = AguaController
