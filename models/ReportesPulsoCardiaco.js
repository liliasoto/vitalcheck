const {connectMySql} = require('../dbconnection');

class RPCModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('ReportesPulsoCardiaco');
        return await query;
    }
    
}

module.exports = RPCModel;