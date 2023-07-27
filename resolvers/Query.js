const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola(){
        return "Tudo bem?"
    },
    horaAtual(){
        const dataCompleta = new Date();
        return dataCompleta
    },
    usuarioLogado(){
        return {
            id: 1,
            nome: "Anderson",
            email: "aa@aa.com",
            idade: 23,
            salario_real: 134.56,
            vip: true

        }
    },
    produtoEmDetaque(){
        return {
            nome: "Chocolate",
            preco: 200.0,
            desconto: 0
        }
    },
    numerosMegaSena(){
        const onlyUnique = (value, index, array) => array.indexOf(value) === index;
        const crescente = (a, b) => a - b
        return Array(6).fill().map(() => parseInt(Math.random() * 60 + 1)).filter(onlyUnique).sort(crescente);
    },
    usuarios(){
        return usuarios
    },
    usuario(_,args){
        console.info(_)
        console.info(args)
        const sels = usuarios.filter(u => u.id == args.id)
        return sels ? sels[0] : null;
    },
    perfis(){
        return perfis;
    },
    perfil(_, { id }){
        const perfil = perfis.filter(p => p.id == id)
        return perfil ? perfil[0] : null;
    }
}