'use strict'
const MongoTemp = use('App/Models/TempRegistro')

class TemperaturaLvlController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data){
    MongoTemp.create({
      sensor_id: data.sensor_id,
      dato: data.dato
  })
    console.log(this.socket.id)
    console.log(data)
  }
}

module.exports = TemperaturaLvlController
