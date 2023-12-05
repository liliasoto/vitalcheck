const {connectMySql} = require('../dbconnection');

class MensajesModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('Mensajes');
        return await query;
    }

    static async insertar(datos) {
        let db = await connectMySql();
        const result = await db('Mensajes').insert(datos).returning('MensajeID');
        return result[0];
    }

}

module.exports = MensajesModel;