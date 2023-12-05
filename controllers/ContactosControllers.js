const ContactosModel = require('../models/contactos');

class ContactosController {
    static async indexGet(req, res){
        let data = await ContactosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id; 
        let data = await ContactosModel.consultarPorID(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }
}

module.exports = ContactosController ;