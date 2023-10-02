const dados = require('../bancodedados')

let geradorNumero = 1

const contas = () => {
    const contas = dados.contas;
    return contas
};
const novaConta = (usuario) => {
    const numero = geradorNumero++
    const saldo = 0

    dados.contas.push({ numero, saldo, usuario });
};
const contaAlterada = (usuario, numeroConta) => {
    dados.contas = dados.contas.map((conta) => {

        if (conta.numero === Number(numeroConta)) {
            return {
                numero: conta.numero,
                saldo: conta.saldo,
                usuario: usuario
            }

        } else {
            return conta
        }
    })
};
const contaDeletada = (numeroConta) => {
    const conta = dados.contas.find((conta) => conta.numero === Number(numeroConta))
    const index = dados.contas.indexOf(conta)
    dados.contas.splice(index, 1)
}

module.exports = {
    contas,
    novaConta,
    contaAlterada,
    contaDeletada
};