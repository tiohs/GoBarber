# Services e Solid

Resumão ->

- O **repository** faz a ponte entre a aplicação e a sua forma de persistência de dados, realizando apenas as operações relacionadas aos dados da aplicação, tais como buscar, deletar, editar, remover, criar.

- Já o **service** retira do repository e das rotas da aplicação toda a camada que pode ser compreendida como regras de negócio, tornando o código mais reutilizável.

Separar da rota o que é **regra de negócio** e o que é **transformação de dados**


- Transformação de dados => Fica na rota

- Regra de negócio => Vai para o service, que executa a regra de negócio e retorna para a rota

- A única obrigação da rota é receber requisição, repassa esses dados para um repositório ou service e retorna a resposta. Ela não pode se preocupar com a regra de negócio.

- O service deve possuir um única responsabilidade.
- Realiza a regra de negócio e após repassa para outra função ou para a rota.

- Dependency Inversion Principle
  - Receber repositório por parâmetro no constructor

- Single Responsability Principle -> Cada arquivo possui somente uma responsabilidade
- Open-closed Principle
- Liskov substitution Principle
- Interface segregation Principle
- Dependency Inversion Principle

# Repository
É um conceito introduzido no Data Mapper Pattern ou Repository Pattern que consiste em uma ponte entre nossa aplicação e a fonte de dados, seja ela um banco de dados, um arquivo físico ou qualquer outro meio de persistência de dados da aplicação.

Esse implementação visa isolar a forma com que nos comunicamos com os dados, **abstraindo lógicas comuns de operações no banco.**

Geralmente o **Repository** possui métodos comuns de comunicação com uma fonte de dados como **listagem, busca, criação, edição, remoção, mas conforme a aplicação cresce o desenvolvedor tende a encontrar outras operações repetitíveis e, com isso popula o repositório com mais funcionalidades.

## Exemplo real

Imagine uma aplicação que controla reserva de quartos em um hotel. Uma pessoa pode acessar o site, reservar um quarto e pagar pelo mesmo. Essa reserva depende do quarto estar vago para esse intervalo de dados que o usuário selecionar.

Se pensarmos nisso como uma consulta no banco, precisaremos realizar uma query um pouco complexa onde comparamos a data de entrada e saída com outras reservas já existentes na aplicação, buscando a disponibilidade do quarto.

Em um cenário real, essa busca por disponibilidade de um quarto pode ser feita em várias partes da aplicação, a home pagedo site pode possuir uma busca prévia de disponibilidade, a reserva precisa verificar a disponibilidade, o atendente do hotel precisa conseguir verificar disponibilidade para reservas no balcão, ou seja, uma mesma query no banco de dados sendo utilizada em múltiplos contextos, por isso criamos isso em um Repository, **reaproveitamento**.

# Service

O **Service** é um conceito introduzido no **Service Pattern**. Ele tem como objetivo abstrair regras de negócio das rotas, além de tornar nosso código mais reutilizável.

No contexto da nossa jornada, essa implementação visa reduzir a complexidade das rotas da nossa aplicação e deixá-las responsáveis apenas pelo uqe realmente devem fazer: **receber uma requisição, repassar os dados para outro arquivo e devolver uma resposta.

O Service deve ter um nome descritivo, e **sempre possuir apenas um método**. Além disso, caso outra rota ou arquivo precise executar essa mesma ação, basta chama e executar esse Service, obedecendo assim a outro importante princípio: **DRY**.

## Exemplo real

Imagine a mesma aplicação que controla a reserva de quartos de um hotel. Essa reserva pode envolver diversas etapas, como verificação da disponibilidade, realização do pagamento, envio de e-mails, entre outros.

Dessa forma, a simples ação de reservar um quarto irá desencadear em diversas outras ações. Se pensarmos nisso como código, teremos regras de negócio que não são de responsabilidade do repository, diretamente na nossa rota. Isso fere alguns princícpios de programação como o **Single Responsability Principle** e portanto, os Services são criados para serem os responsáveis por realizar essas ações.

Além disso, imagine que em outras ações como consumir produtos do Hotel seja necessário executar algumas ações novamente, como realizar o pagamento. Com o Service criado, basta chamá-lo e executá-lo novamente.


# Rota
Tem como responsablidade receber requisão , chamar uma função para retorna os dados
da reposta da rota

# Banco de dados

Estrátegias de abstração existe 3 principais que são :
  - **Drives** - Lidar direito com banco dedos pg - está é a forma mais raiz
  - **Query build**  - construir as query com js depois converte para sql
  - **ORM** - Object Relational Mapping

# Docker

* Como funciona ?
  - Criação de ambiente isolados (container)
  -
