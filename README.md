# TCC SmartLock

## O que é?
Esse projeto é uma API que retorna tweets, utlizando a API do Twitter.


## Requisitos

 - Node v8.3.11

## Funcionamento

Clone o repositorio: `git clone https://github.com/IgorGSarmento/tccsmartlock.git`

Abra a pasta

No terminal, digite: `npm install`

Para rodar o server, utilize o comando: `DEBUG=tccsmartlock:* npm start`

## Rotas

### 1ª Rota

    http://localhost:3000/twitter/nomedousuario

Essa rota retorna um json com o último tweet de um determinado usuario. Para utilizar ela é so trocar o "nomeusuario" por um nome de usuario do Twitter.

### 2ª Rota

    http://localhost:3000/twitter/nomedousuario/hashtag

Essa rota retorna um json com a última ocorrencia de uma hashtag em um tweet de um determinado usuario. Para utilizar ela é so trocar o "nomeusuario" por um nome de usuario do Twitter e a "hashtag" pela hashtag desejada.

