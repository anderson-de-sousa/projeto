const {usuarios, proximoId } = require('..data/db')

module.exports = {
    nomeUsuario(_, {nome, email, idade}){
        const novo = {
            id: proximoId(),
            nome, 
            email,
            idade,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo);
    }
}