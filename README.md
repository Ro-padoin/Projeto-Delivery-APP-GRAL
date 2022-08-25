# Projeto App Delivery!

O `App Delivery` é uma plataforma de delivery de cerveja! <br/>
Esta aplicação recebeu o nome de `GRAL` Delivery, pois se trata de um acrônimo do nome dos integrantes do grupo.

<br/>

## Descricao do Projeto

Projeto final do Modulo de Backend.

Nessa aplicação, o objetivo é criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 

O projeto não é só codar, mas também é trabalhar em equipe, aprender e se divertir muito! 

### Contexto para criação da aplicação:

A distribuidora de cervejas da dona Tereza está se informatizando! 
Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a sua equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. 

A ideia da sua equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

<br/>

## Desenvolvimento

### Deverá ter os seguintes fluxos:

- **Fluxo Comum** que compreende: 
  - (1) Tela de Login; 
  - (2) Tela de Registro.

- **Fluxo do Cliente** que compreende: : 
  - (3) Tela de Produtos; 
  - (4) Tela de Checkout; 
  - (5) Tela de Pedidos; 
  - (6) Tela de Detalhes do Pedido.

- **Fluxo da Pessoa Vendedora** que compreende: 
  - (7) Tela de Pedidos; 
  - (8) Tela de Detalhes/Controle do Pedido.

- **Validação do Status do Pedido** que compreende: 
  - (9) Teste de status; 

- **Fluxo da Pessoa Administradora** que compreende: 
  - (10) Tela de gerenciamento de usuários.

### A plataforma precisa:

- Acesso via login para clientes, pessoas vendedoras e administrador do sistema:
  - (1) A pessoa cliente, que compra da lista de produtos;
  - (2) A pessoa vendedora, que aprova, prepara e entrega;
  - (3) A pessoa administradora, que gerencia quem usa o aplicativo.

- Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos.

- Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega.

### Faz-se necessário:

- Integrar front-end e back-end.

- Construir banco de dados MySQL, através do Sequelize, bem como associar as tabelas quando for conveniente.

- Construir as páginas e componentes no front-end.

- Gerar _token_ para autenticação dos usuários;

- O back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

<br/>

## Habilidades desenvolvidas

- A criação de `components` e `pages` usando React, Hooks e Context.
- A estilização do front-end com CSS.
- A modelagem do banco de dados com MySQL através do Sequelize;
- A criação e associação de tabelas;
- A construção de uma API REST;
- A construção de um CRUD, utilizando ORM Sequelize;
- Uso de Metodologias ágeis: Kanban;
- SoftSkills:
  - Colaboração;
  - Liderança;
  - Resolução de problemas e conflitos;
  - Comunicação;
  - Gerenciamento do Tempo;
  - Auto-liderança.

<br/>

## Tecnologias utilizadas

- Node.js;
- Sequelize;
- Mysql;
- JsonWebToken;
- Criptografia com md5;
- Nodemon;
- Validações com Yup;
- Eslint;
- Tailwind;
- React: Hooks, Alert e Context API;
- Axios;
- Trello;
- Slack;
- Discord;
- Zoom.

<br/>

## Colaboradores

Desenvolvido em grupo por:

`G`uilherme Hallmann <br/>
`R`osalia Oliveira <br/>
`A`riante Ueti <br/>
`L`ucas Junqueira <br/>

<br/>

## Status

Finalizado.

<br/>

## Desempenho

97%.

<br/>


# Requisitos

###  1 - Crie uma tela de login que deve ser acessível pelos endpoints / e /login no navegador

---

###  2 - Crie os elementos da tela de login com os data-testids disponíveis no protótipo

---

###  3 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados mal formatados

---

###  4 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados inexistentes no banco de dados

---

###  5 - Desenvolva a tela de login de maneira que ela possibilite fazer o login com dados válidos e existentes no banco de dados

---

###  6 - Crie uma tela de registro que deve ser acessível via endpoint /register no navegador e pelo botão de registro na tela de login

---

###  7 - Crie os elementos da tela de registro com os data-testids disponíveis no protótipo

---

###  8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal formatados

---

###  9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos

---

###  10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente

---

###  11 - Crie uma tela de produtos do cliente contendo uma barra de navegação - navbar -, que servirá também para demais telas das pessoas usuárias

---

###  12 - Desenvolva a tela de produtos do cliente criando os demais elementos com os data-testids disponíveis no protótipo

---

###  13 - Desenvolva a tela de produtos do cliente de forma que ela pressuponha dados válidos da pessoa usuária armazenados no localStorage

---

###  14 - Desenvolva a tela de produtos do cliente de forma que os cards de todos os produtos pré-cadastrados contenham os valores corretos

---

###  15 - Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios

---

###  16 - Desenvolva a tela de produtos do cliente de forma que haja um botão de carrinho que redirecionará para a tela de checkout caso itens sejam adicionados

---

###  17 - Crie uma tela de checkout do cliente com elementos com os data-testids disponíveis no protótipo

---

###  18 - Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total

---

###  19 - Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho

---

###  20 - Desenvolva a tela de checkout do cliente de forma a nos redirecionar para a tela de detalhes do pedido após a finalização do mesmo

---

###  21 - Desenvolva a tela de checkout do cliente de forma a gerar uma nova venda na tabela sales, assim como relações em sales_products, ao finalizar o pedido

---

###  22 - Crie uma tela de pedidos do cliente com elementos a partir dos data-testids disponíveis no protótipo

---

###  23 - Desenvolva a tela de pedidos do cliente de forma a conter a lista de pedidos do mesmo com os dados corretos

---

###  24 - Desenvolva a tela de pedidos do cliente de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

---

###  25 - Crie uma tela de detalhes do pedido do cliente com elementos a partir dos data-testids disponíveis no protótipo

---

###  26 - Desenvolva a tela de detalhes do pedido do cliente de forma a possuir os dados corretos da venda

---

###  27 - Crie uma tela de pedidos da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

---

###  28 - Desenvolva a tela de pedidos da pessoa vendedora de forma a conter a lista de pedidos do mesmo com os dados corretos

---

###  29 - Desenvolva a tela de pedidos da pessoa vendedora de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

---

###  30 - Crie uma tela de detalhes do pedido da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

---

###  31 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a possuir os dados corretos da venda

---

###  32 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a ser capaz de alterar o status do pedido

---

###  33 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de detalhes do pedido do cliente após atualização das páginas

---

###  34 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de lista de pedidos do cliente após atualização das páginas

---

###  35 - Garanta que o status do pedido atualizado na tela de detalhes do pedido do cliente seja refletido na tela de lista de pedidos da pessoa vendedora após atualização das páginas

---

###  36 - Crie uma tela de pessoa administradora com elementos a partir dos data-testids disponíveis no protótipo

---

###  37 - Desenvolva a tela da pessoa administradora de forma a validar o formulário de cadastro

---

###  38 - Desenvolva a tela da pessoa administradora de forma que seja possível cadastrar pessoas usuárias válidas

---

###  39 - Desenvolva a tela da pessoa administradora de forma que ela impossibilite o cadastro de pessoas usuárias já existentes

---

###  40 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que haja uma tabela de pessoas usuárias cadastradas

---

###  41 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que seja possível deletar pessoas usuárias na tabela

---
