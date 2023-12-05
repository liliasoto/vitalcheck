const RNOModel = require('../models/ReportesNivelesOxigeno');

class RNOController {
    static async indexGet(req, res){
        let data = await RNOModel.consultar();
        res.send(data);
    }
}
module.exports = RNOController ;