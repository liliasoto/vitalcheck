const {connectMySql} = require('../dbconnection');

class RNOModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('ReportesNivelesOxigeno');
        return await query;
    }

    static async insertar(datos) {
        let db = await connectMySql();
        const result = await db('ReportesNivelesOxigeno').insert(datos).returning('ReporteID');
        return result[0];
    }
}

module.exports = RNOModel;