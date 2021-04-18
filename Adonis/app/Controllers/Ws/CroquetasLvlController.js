'use strict'
const MongoCroqueta = use('App/Models/CroquetasRegistro')
class CroquetasLvlController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data){
    MongoCroqueta.create({
      sensor_id: data.sensor_id,
      dato: data.dato
  })
    console.log(this.socket.id)
    console.log(data)
  }
}

module.exports = CroquetasLvlController
