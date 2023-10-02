const { contas } = require('../bancodedados')


const verificarContaSenha = (req, res, next) => {
    const { numero_conta, senha } = req.query
    if (
        !numero_conta ||
        !senha
    ) {
        return res.status(400).send({ "mensagem": "O número da conta e senha são obrigatórios!" })
    }
    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (!conta) {
        return res.status(404).send({ "mensagem": "Conta bancária não encontada!" })
    }
    if (conta.usuario.senha !== senha) {
        return res.status(401).send({ "mensagem": "A senha do banco informada é inválida" })
    }

    next()
}

module.exports = {
    verificarContaSenha
}