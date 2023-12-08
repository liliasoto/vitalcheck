const MensajesModel = require('../models/Mensajes');

class MensajesController {
    static async indexGet(req, res){
        let data = await MensajesModel.consultar();
        res.send(data);
    }

    //Post
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await MensajesModel.insertar(newData);

            res.status(201)
                .header('Location', `/usuarios/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = MensajesController;