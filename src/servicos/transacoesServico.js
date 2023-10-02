const transacoesRepositorio = require('../repositorios/transacoesRepositorio')


const depositar = async (numero_conta, valor) => {
    await transacoesRepositorio.deposito(numero_conta, valor)

};
const sacar = async (numero_conta, valor) => {
    await transacoesRepositorio.saque(numero_conta, valor)

};
const transferir = async (numero_conta_origem, numero_conta_destino, valor) => {
    await transacoesRepositorio.transferencia(numero_conta_origem, numero_conta_destino, valor)

};

module.exports = {
    depositar,
    sacar,
    transferir
}