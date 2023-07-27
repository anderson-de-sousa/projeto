let id = 1

function proximoID(){
    return id++;
}

const usuarios = [{
    id: proximoID(),
    nome: "João Silva",
    email: "jsiolva@email.com",
    idade: 29,
    perfil: null,
    status: 'ATIVO'
},{
    id: proximoID(),
    nome: "José Maria",
    email: "jmaria@email.com",
    idade: 26,
    perfil: {
        id: 1,
        nome: "Comum"
    },
    status: 'ATIVO'
},{
    id: proximoID(),
    nome: "Daniela Smith",
    email: "dsmith@email.com",
    idade: 25,
    perfil: {
        id: 2,
        nome: "Administrador"
    },
    status: 'BLOQUEADO'
},
]

const perfis = [
    {
        id: 1,
        nome: "Comum"
    },
    {
        id: 2,
        nome: "Administrador"
    }
]

module.exports = { 
                usuarios, 
                perfis,
                proximoID }