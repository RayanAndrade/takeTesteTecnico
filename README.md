# takeTesteTecnico
Repositório criado para execução e documentação do teste técnico para a Take.

Tabela de conteúdos
=================
* [Status projeto](#status-projeto)
* [Features](#features)
* [Bibliotecas/Frameworks](#bibliotecas-e-frameworks)
* [Modelagem de dados](#modelagem-de-dados)
* [Endpoints](#endpoints)


## Status projeto

✅ Finalizado


## Features

- [x] Criar fluxo conversacional estático
- [x] Criar API com retorno padrão
- [x] API consultar e retornar dados do github
- [x] Adicionar chamada de API no bot
- [x] Gerar carrossel com base na resposta da API

## Bibliotecas e Frameworks

- [Node](https://nodejs.org/) Utilizada devido a grande quantidade de material para estudo e pelo fato de possuir uma comunidade muito ativa. A proximidade do time com a tecnologia também facilitou seu uso e a criação de padrões durante o desenvolvimento.
- [Blip](https://www.take.net) Utilizada devido a facilitação de criação do chatbot. Possui uma documentação e comunidade bem abrangentes, portanto age como um grande facilitador no momento do desenvolvimento.

## Modelagem de dados

Os componentes foram divididos em relação as suas responsabilidades.
- Routes: É o componente responsável pela definição das rotas e chamada dos métodos a serem executados (sem nenhuma lógica ou regra de negócio envolvida, apenas chamando as funções sempre).
- gitController: É o componente responsável por realizar interações relacionadas ao github.
- blipController: É o componente responsável por realizar interações relacionadas ao chatbot. É usado para formatar as respostas do github para o formato utilizado pelo bot.

## Endpoints
* `GET /getFiveRepositoriesAsCarroussel/:language`: Retorna os 5 repositórios mais antigos, ordenados por data de criação de maneira ascendente, utilizando a linguagem passada como parâmetro.
* `GET /`: Rota padrão, apenas retorna que a API está funcionando.