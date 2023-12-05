const RNOModel = require('../models/ReportesNivelesOxigeno');

class RNOController {
    static async indexGet(req, res){
        let data = await RNOModel.consultar();
        res.send(data);
    }

    //Post
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await RNOModel.insertar(newData);

            res.status(201)
                .header('Location', `/usuarios/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}
module.exports = RNOController ;