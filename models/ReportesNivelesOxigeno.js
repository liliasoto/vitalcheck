const {connectMySql} = require('../dbconnection');

class RNOModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('ReportesNivelesOxigeno');
        return await query;
    }
}

module.exports = RNOModel;