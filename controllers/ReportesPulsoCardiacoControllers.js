const RPCModel = require('../models/ReportesPulsoCardiaco');

class RPCController {
    static async indexGet(req, res){
        let data = await RPCModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id; 
        let data = await RPCModel.consultarPorID(id);
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

            const insertedId = await RPCModel.insertar(newData);

            res.status(201)
                .header('Location', `/usuarios/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = RPCController ;