const {connectMySql} = require('../dbconnection');

class RPCModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('ReportesPulsoCardiaco');
        return await query;
    }

    static async insertar(datos) {
        let db = await connectMySql();
        const result = await db('ReportesPulsoCardiaco').insert(datos).returning('ReporteID');
        return result[0];
    }
    
}

module.exports = RPCModel;