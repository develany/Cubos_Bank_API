const { contas } = require('../bancodedados')


const verificarDadosDeposito = (req, res, next) => {
    const { numero_conta, valor } = req.body
    if (
        !numero_conta ||
        !valor
    ) {
        return res.status(400).send({ "mensagem": "O número da conta e o valor são obrigatórios!" })
    }
    const existeConta = contas.some((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (!existeConta) {
        return res.status(404).send({ "mensagem": "Conta bancária não encontada!" })
    }
    if (Number(valor) <= 0) {
        return res.status(400).send({ "mensagem": "O valor não pode ser menor que zero!" })
    }
    next()
}
const verificarDadosSaque = (req, res, next) => {
    const { numero_conta, valor, senha } = req.body
    if (
        !numero_conta ||
        !valor ||
        !senha
    ) {
        return res.status(400).send({ "mensagem": "O número da conta, valor e senha são obrigatórios!" })
    }
    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (!conta) {
        return res.status(404).send({ "mensagem": "Conta bancária não encontada!" })
    }
    if (conta.usuario.senha !== senha) {

        return res.status(401).send({ "mensagem": "A senha do banco informada é inválida!" })
    }
    if (Number(valor) <= 0) {
        return res.status(400).send({ "mensagem": "O valor não pode ser menor que zero!" })
    }
    if (conta.valor < valor) {
        return res.status(401).send({ "mensagem": "Saldo insuficiente!" })
    }
    next()
}
const verificarDadosTransferencia = (req, res, next) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body

    if (
        !numero_conta_origem ||
        !numero_conta_destino ||
        !valor ||
        !senha
    ) {
        return res.status(400).send({ "mensagem": "O número da conta de origem, de destino,o valor e senha são obrigatórios!" })
    }
    const conta_origem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })
    const conta_destino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    })
    if (!conta_origem) {
        return res.status(404).send({ "mensagem": "Conta de origem não encontada!" })
    }
    if (!conta_destino) {
        return res.status(404).send({ "mensagem": "Conta de destino não encontada!" })
    }
    if (conta_origem.usuario.senha !== senha) {

        return res.status(401).send({ "mensagem": "Senha inválida!" })
    }
    if (Number(valor) <= 0) {
        return res.status(401).send({ "mensagem": "O valor não pode ser menor que zero!" })
    }
    if (conta_origem.valor < valor) {
        return res.status(401).send({ "mensagem": "Saldo insuficiente!" })
    }

    next()
}
module.exports = {
    verificarDadosDeposito,
    verificarDadosSaque,
    verificarDadosTransferencia
}