const {connectMySql} = require('../dbconnection');

class MensajesModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('Mensajes');
        return await query;
    }

}

module.exports = MensajesModel;