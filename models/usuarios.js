const {connectMySql} = require('../dbconnection');

class UsuariosModel {
    static async consultar() {
        let db = await connectMySql();
        let query = db('Usuarios');
        return await query;
    }

    static async consultarPorID(id){
        let db = await connectMySql();
        return await db('Usuarios').where('UsuarioID', id);
    }
    
    static async insertar(datos) {
        let db = await connectMySql();
        const result = await db('Usuarios').insert(datos).returning('UsuarioID');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMySql();
        return await db('Usuarios').where('UsuarioID', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMySql();
        newData['UsuarioID'] = id;
        await db('Usuarios').where('UsuarioID', id).del();
        await db.insert(newData).into('Usuarios');
        return id;
    }

}

module.exports = UsuariosModel;