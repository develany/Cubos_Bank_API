const { contas } = require('../bancodedados')

const verificacaoSenha = (req, res, next) => {
    const { senha_banco } = req.query
    if (senha_banco !== 'Cubos123Bank') {
        return res.status(401).send({ "mensagem": "A senha do banco informada é inválida!" })
    }
    next()
}
const verificarDados = (req, res, next) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
    if (
        !nome ||
        !cpf ||
        !data_nascimento ||
        !telefone ||
        !email ||
        !senha
    ) {
        return res.status(400).send({ "mensagem": "Todos os campos campos são obrigatórios!" })
    }
    const existeCpfIgual = contas.some((conta) => {
        return conta.usuario.cpf === cpf
    })
    const existeEmailIgual = contas.some((conta) => {
        return conta.usuario.email === email
    })

    if (existeCpfIgual || existeEmailIgual) {
        return res.status(400).send({ "mensagem": "Já existe uma conta com o cpf ou e-mail informado!" })
    }

    next()

}
const verificarNumero = (req, res, next) => {
    const { numeroConta } = req.params
    const temConta = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })
    if (!temConta) {
        return res.status(404).send({ "mensagem": "Conta bancária não encontada!" })
    }
    next()
}
const verificarSaldo = (req, res, next) => {
    const { numeroConta } = req.params
    const conta = contas.find((conta) => conta.numero === Number(numeroConta))
    if (conta.saldo > 0) {
        return res.status(400).send({ "mensagem": "A conta só pode ser removida se o saldo for zero!" })
    }
    next()
}

module.exports = {
    verificacaoSenha,
    verificarDados,
    verificarNumero,
    verificarSaldo
}