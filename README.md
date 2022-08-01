Este repositório contém um projeto desenvolvido enquanto pessoa estudante da @betrybe.

---


#  O que foi desenvolvido<br />

  Uma API utilizando a arquitetura MSC (model-service-controller)!

  A API construída é um sistema de gerenciamento de veículos, onde é possível realizar as operações de CRUD (criar, ler, atualizar e excluir) nas informações de carros e motos.

  Utiliza o banco MondoDB para a gestão de dados junto com a ODM(Object Document Mapping) Mongoose. Além disso, a API é RESTful.

  <br />

# Tecnologias<br />

* Docker

* MongoDB

* Mongoose

* Zod

* TypeScript

* Node.js

* Express

* Mocha

* Chai

* Express-async-errors

<br />


# Funcionalidades
<br />

  - A pessoa usuária deve conseguir:

    - Adicionar, ler, deletar e atualizar informações de carros e motos no banco de dados;

  - Para **todos os endpoints** garante que:

    - Caso o recurso **não seja encontrado**, **aconteça um erro** ou **haja dados inválidos** na sua requisição, a API deve retornar o status HTTP adequado com o body `{ error: <mensagem de erro> }`;

    - Todos os retornos de erro devem seguir o mesmo formato.

<br />

# Rodando a aplicação
<br />

  ## Com Docker

  > Apoś clonar o repositório, rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.

  > Use o comando `docker exec -it car_shop bash`.

  > Instale as dependências com `npm install`.

  > Use o comando `npm start` para rodar a aplicação.

  > Use o comando `npm run test:coverage` para rodar os testes (Testes unitários cobrindo 100% da aplicação).

# Back End
<br />

A aplicação apresenta as seguintes rotas disponíveis:

* Método GET `/cars/`, lista todos os carros;

* Método POST `/cars/`, cria um novo carro;

* Método GET `/cars/:id`, lista um carro pelo seu id;

* Método PUT `/cars/:id`, edita um determinado carro;

* Método DELETE `/cars/:id`, apaga um carro do banco de dados;

* Método GET `/motorcycles/`, lista todas as motos;

* Método POST `/motorcycles/`, cria uma nova moto;

* Método GET `/motorcycles/:id`, lista uma moto pelo seu id;

* Método PUT `/motorcycles/:id`, edita uma determinada moto;

* Método DELETE `/motorcycles/:id`, apaga uma moto do banco de dados;

<br />

# Detalhes
<br />

Todos os endpoints estão no padrão REST

  - Usa os verbos HTTP adequados para cada operação;

  - Agrupa e padroniza as URLs em cada recurso;

  - Garante que os endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não;

  - E retorna os códigos de status corretos (recurso criado, erro de validação, objeto não encontrado, etc).

  <br />

# Feedbacks
<br />

Caso tenha alguma sugestão ou tenha encontrado algum erro no código, estou disponível para contato no meu [LinkedIn](https://www.linkedin.com/in/rafael-de-jesus-lima/)
