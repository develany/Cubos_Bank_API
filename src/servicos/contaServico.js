const constaRepositorio = require('../repositorios/contaRepositorio')

const buscarSaldo = async (numero_conta) => {
    const resposta = await constaRepositorio.saldo(numero_conta)

    return resposta;
};
const buscarExtrato = async (numero_conta) => {
    const resposta = await constaRepositorio.extrato(numero_conta)

    return resposta;
};
module.exports = {
    buscarSaldo,
    buscarExtrato
};