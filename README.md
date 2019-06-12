# Tokens JWT com node.js

Criação e validação de tokens JWT utilizando node.js, mais especificamente a biblioteca [jsonwebtoken].

### Instalação
```
npm install
```

### Para rodar
```
node serve.js
```

### Utilização

Faça uma requisição GET a rota [/createTokenJwt], que retornará o Token gerado.

Faça uma requisição a rota [/itWorksWithToken] passando o Token recebido no header Authorization.