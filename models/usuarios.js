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
    
}

module.exports = UsuariosModel;