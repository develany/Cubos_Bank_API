# Projeto Cubos Bank API 💼💰

Bem-vindo ao projeto Cubos Bank API! Este é um sistema de gestão de contas bancárias para uma instituição financeira fictícia, o Cubos Bank. A API permite criar, gerenciar e realizar transações em contas bancárias.

## Funcionalidades Principais 🚀

- [x] Criar conta bancária
- [x] Listar contas bancárias
- [x] Atualizar dados do usuário da conta bancária
- [x] Excluir conta bancária
- [x] Depositar em uma conta bancária
- [x] Sacar de uma conta bancária
- [x] Transferir valores entre contas bancárias
- [x] Consultar saldo da conta bancária
- [x] Emitir extrato bancário

## Requisitos Técnicos 🛠️

- Node.js
- Express.js
- JavaScript
- RESTful API

## Como Usar 📝

1. Clone este repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor com `npm start`.
4. Acesse a API em `http://localhost:3000`.

## Exemplos de Uso 📦

Aqui estão alguns exemplos de como utilizar as funcionalidades da API:

### Criar uma conta bancária

```json
POST /contas

{
    "nome": "Exemplo",
    "cpf": "12345678900",
    "email": "exemplo@email.com",
    "senha": "senha123"
}

```
### Listar contas bancárias

```json
GET /contas?senha_banco=Cubos123Bank

```
### Depositar em uma conta bancária

```json
POST /transacoes/depositar

{
    "numero_conta": "1",
    "valor": 1000
}
```
## Contribuindo 🤝
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta abrir um Pull Request e trabalharemos juntos!

## Licença 📜
Este projeto está sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.





