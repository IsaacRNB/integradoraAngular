'use strict'
const Route = use('Route')


//=========================Login y Registro===========================================
Route.post('/login', 'AuthController.login')
Route.post('/registrar', 'UserController.crear')
Route.post('/logout', 'AuthController.logout')

//========================= Sensores y utileria ==========================================
// Route.get('/getsenso', 'SensoreController.index')
// Route.get('/registrarsensor', 'SensoreController.registro')
// Route.get('/gettipos', 'TipoController.index')
// Route.get('/registrartipos', 'TipoController.registro')
// Route.get('/getdatos', 'RegistroController.index')
// Route.get('/registrardatos', 'RegistroController.registro')
Route.get('/getagua', 'AguaController.index')
Route.get('/getcroquetas', 'CroquetaController.index')
Route.get('/gettemp', 'TemperaturaController.index')

//=========================Registro y update de perrito=================================
Route.group(() => {
    Route.post('/registrarperrito', 'PerritoController.crear')
    Route.delete('/eliminarperrito/:id', 'PerritoController.delete')
    Route.get('/getperritos', 'PerritoController.getperritos')

    Route.put('/actualizarperrito2', 'PerritoController.actualizar2')

    Route.get('/perros', 'UserController.getUsuarioWithPerro') //seagrego ruta

  }).middleware('auth').prefix('perros/')

  Route.get('/getimgperro', 'PerritoController.getimage')

//=========================update y traer usuarios=================================
  Route.group(() => {
  Route.put('/actualizar', 'UserController.actualizar')
  Route.get('/getusuarios', 'UserController.getusuarios')
  Route.post('/vincular', 'UserController.vincular')
  Route.get('/getdispensa', 'UserController.getdispensa')
  }).middleware('auth').prefix('usuarios/')
  