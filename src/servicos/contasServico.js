const constasRepositorio = require('../repositorios/contasRepositorio')

const listar = async () => {
    const resposta = await constasRepositorio.contas()

    return resposta;
};
const criar = async (usuario) => {
    await constasRepositorio.novaConta(usuario)

};
const atualizar = async (usuario, numeroConta) => {
    await constasRepositorio.contaAlterada(usuario, numeroConta)

};
const deletar = async (numeroConta) => {
    await constasRepositorio.contaDeletada(numeroConta)

};
module.exports = {
    listar,
    criar,
    atualizar,
    deletar
}