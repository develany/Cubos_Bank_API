const dados = require('../bancodedados')


const saldo = (numero_conta) => {
    const conta = dados.contas.find((conta) => conta.numero === Number(numero_conta))
    return { saldo: conta.saldo };
};
const extrato = (numero_conta) => {
    const depositos = dados.depositos.filter((deposito) => {
        return (deposito.numero_conta === numero_conta)
    })
    const saques = dados.saques.filter((saque) => {
        return (saque.numero_conta === numero_conta)
    })
    const transferenciasEnviadas = dados.transferencias.filter((transferencia) => {
        return (transferencia.numero_conta_origem === numero_conta)
    })
    const transferenciasRecebidas = dados.transferencias.filter((transferencia) => {
        return (transferencia.numero_conta_destino === numero_conta)
    })


    return { depositos, saques, transferenciasEnviadas, transferenciasRecebidas }
};
module.exports = {
    saldo,
    extrato
};