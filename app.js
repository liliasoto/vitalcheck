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
app.post('/contactos', ContactosControllers.indexPost);
app.patch('/contactos/:id([0-9]+)', ContactosControllers.itemPatch);

app.get('/mensajes', MensajesController.indexGet);
app.post('/mensajes', MensajesController.indexPost);

app.get('/rno', RNOController.indexGet);
app.post('/rno', RNOController.indexPost);

app.get('/rpc', RPCController.indexGet);
app.post('/rpc', RPCController.indexPost);


app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});
