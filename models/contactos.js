const {connectMySql} = require('../dbconnection');

class ContactosModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('Contactos');
        return await query;
    }   

    static async insertar(datos) {
        let db = await connectMySql();
        const result = await db('Contactos').insert(datos).returning('ContactoID');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMySql();
        return await db('Contactos').where('ContactoID', id).update(campos);
    }
}

module.exports = ContactosModel;