const {connectMySql} = require('../dbconnection');

class ContactosModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('Contactos');
        return await query;
    }   
}

module.exports = ContactosModel;