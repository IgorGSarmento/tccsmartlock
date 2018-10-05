# TCC SmartLock

## Requisitos

 - Node v8.3.11
 - Nodemon
 - 

## Funcionamento

Clone o repositorio: `git clone https://github.com/IgorGSarmento/tccsmartlock.git`

Abra a pasta

No terminal, digite: `npm install`

Para rodar o server, utilize o comando: `DEBUG=tccsmartlock:* npm start`

## Rotas

http://localhost:3000/twitter/nomedousuario/hashtag
nome do usuario é obrigatorio.
hashtag não é obrigatório.

Ele retorna um json com o ultimo tweet do usuário.

