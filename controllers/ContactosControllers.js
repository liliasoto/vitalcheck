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

    //Post
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await ContactosModel.insertar(newData);

            res.status(201)
                .header('Location', `/usuarios/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    //PATCH
    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await ContactosModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = ContactosController ;