const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController');
const ContactosControllers = require('./controllers/ContactosControllers');
const MensajesController = require('./controllers/MensajesControllers');
const RNOController = require('./controllers/ReportesNivelesOxigenoControllers');
const RPCController = require('./controllers/ReportesPulsoCardiacoControllers');

app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vitalcheck');
});

app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

app.get('/contactos', ContactosControllers.indexGet);
app.get('/mensajes', MensajesController.indexGet);
app.get('/rno', RNOController.indexGet);
app.get('/rpc', RPCController.indexGet);


app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});
