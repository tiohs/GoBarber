# Services e Solid

Resumão Back ->

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

- Single Responsibility Principle -> Cada arquivo possui somente uma responsabilidade
- Open closed Principle
- Lis kov substitution Principle
- Interface segregation Principle
- Dependency Inversion Principle

# Repository

É um conceito introduzido no Data Mapper Pattern ou Repository Pattern que consiste em uma ponte entre nossa aplicação e a fonte de dados, seja ela um banco de dados, um arquivo físico ou qualquer outro meio de persistência de dados da aplicação.

Esse implementação visa isolar a forma com que nos comunicamos com os dados, **abstraindo lógicas comuns de operações no banco.**

Geralmente o **Repository** possui métodos comuns de comunicação com uma fonte de dados como \*\*listagem, busca, criação, edição, remoção, mas conforme a aplicação cresce o desenvolvedor tende a encontrar outras operações repetitíveis e, com isso popula o repositório com mais funcionalidades.

## Exemplo real

Imagine uma aplicação que controla reserva de quartos em um hotel. Uma pessoa pode acessar o site, reservar um quarto e pagar pelo mesmo. Essa reserva depende do quarto estar vago para esse intervalo de dados que o usuário selecionar.

Se pensarmos nisso como uma consulta no banco, precisaremos realizar uma query um pouco complexa onde comparamos a data de entrada e saída com outras reservas já existentes na aplicação, buscando a disponibilidade do quarto.

Em um cenário real, essa busca por disponibilidade de um quarto pode ser feita em várias partes da aplicação, a home pagedo site pode possuir uma busca prévia de disponibilidade, a reserva precisa verificar a disponibilidade, o atendente do hotel precisa conseguir verificar disponibilidade para reservas no balcão, ou seja, uma mesma query no banco de dados sendo utilizada em múltiplos contextos, por isso criamos isso em um Repository, **reaproveitamento**.

# Service

O **Service** é um conceito introduzido no **Service Pattern**. Ele tem como objetivo abstrair regras de negócio das rotas, além de tornar nosso código mais reutilizável.

No contexto da nossa jornada, essa implementação visa reduzir a complexidade das rotas da nossa aplicação e deixá-las responsáveis apenas pelo uqe realmente devem fazer: \*\*receber uma requisição, repassar os dados para outro arquivo e devolver uma resposta.

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
- **Query build** - construir as query com js depois converte para sql
- **ORM** - Object Relational Mapping

# Docker

- Como funciona ?
  - Criação de ambiente isolados (container)
  -

### TYPEORM

- Meter as configurações do banco de dados no arquivo **_ormconfig.json_**

# JWT

É uma metologia de fazer autenticação de aplicação em Rest API em JSON

Token JWT ele está divido em 3 camadas que são :

- Headers (Tipos de token, algoritmo)
- Payload (Dados adicionais) podemos guarda dados do usuário
- Assinatura

### Nota

Quando não existe uma typagem numa lib agene tem como sub-escrever tipos com rack

Mudar os typos na pasta **@types** rescrever a typagem criando um arquivo com o nome da pasta e ponto d :
Ex : express.d.ts

Substituição de tipos

Esse erro estava no Rest

```js
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    }
  }
}
```

### Exception Handling

**_Lidando com erros_** aqui lidamos com todo e qualquer tipo de erro da aplicação.

Ex : O que fizemos para o fluxo de rotas que é AppErros

**Middlewres**

Para tratamento de erro ele tem 4 parametros :

- Error
- Request
- Response
- NexTFuntion

# Arquitectura de Software

Domínio : Qual a área de conhecimento daquele módulo/arquivo
Sendo assim os nossos arquivos vão ser devidido em modulos

**DDD**

- Domain Driven Design (metologia que vêm com modelos para trabalhar no **DDD**)
  DDD só se aplica no **Back-End**

Separando por `Modulos` com base no `Dominio`

Nesse contexto são sepados por Setores, não se deve cometer o erro de se basear no models da aplicação se bem que eles são um pouco semelhantes.

`SHARED` pasta onde é guardado tudo que é compartilhado exemplo tratamento de erros, config etc.

**CAMADA DE INFRA**

São as ferramentas que a gente escolhe para se relacionar com a camada de dominio.

Fica a parte do banco de dados, envio de email, armazenamento de arquivo etc.

Toda e qualquer area da aplicação onde não tem regra de negocio.

Nota : Muito cuidado em ensolar o `Service` apesar dele está estar na camada de parecer fazer parte da camada infra ele é a parte da aplicação onde é guardado a regrade negocio então deve ficar no Dominio

### **Liskov**

- Camadas que são integrações com banco de dados ou outras libs elas devem ser possivel substituir difinindo regras.

Nota : Toda vez que um arquivo começar com I ele é uma interface

### **Liskov**

- Vamos usar injection de depedencia para não chamar o proprio construtor no service

# Teste automatizados

Responsavel em manter a nossa aplicação continue funcionando independente do número de novas funcionalidade e do número de devs no time.

1. Teste unitário

Testam funcionalidades especificas da nossa aplicação (precisas ser funções puras).
Jamais : chamada à uma API, efeito colateral

2. Teste de integração

Testam uma funcionalidade completa, passando por várias camadas da aplicação
Route -> controller -> serviço -Z Repositório -> ...

3. Teste EZE

Testes que simulam a ação do usuario dentro da aplicação

# TDD (Test Driven Development)

- Quando ele se cadastrar na aplicação, ele deve receber um email de boas-vindas;

# Mapeamento as Features do Sistema

`Funcionalidade Macro - são coisas que por dentro são mais definidas mais conseguimos ver por tela`

# Recuperação de senha

**RF**

`Requisitos Funcionas - são as funcionalidades que o usúario `

- O usuário deve poder recuperar sua senha informando o seu e-amil;
- O usuário deve receber um e-mail com instruçães de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF**

`Não são ligadas ligada direitamente com a regra de negocio : lib, banco de dados que usaremos`

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar amazon SES para envios em produção;
- O envio de e-mils deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve espirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Actualização do perfil

**RF**

- O usuário deve poder actualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado
- Para atualiza sua senha, o usuário deve informar a senha antiga;
- Para atualiza sua senha, o usuário precisa confirmar a nova senha

# Painel do prestador

**RF**

- O usuário deve poder listar todos seus agendamentos de um dia espicifico
- O prestador deve receber noticação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificões do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- Notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O usuário deve poder lista todos prestadores de serviço cadastrado;
- O usuário deve poder lista os dias de um mês com pelo menos um horário disponivel de um prestador;
- O usuário deve poder listar horários disponivel em um dia específico de um prestador;
- O usuário deve porder realizar um novo agendamento com um prestador;

**RNF**

- Listagem de prestadores deve ser armazenada em cache;
  **RN**
- Cada agendamento deve durar 1h exatamente;
- Os agendamento devem estar disponiveis entre as 8 horas ás 16;
- O usuario não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horario que já passou;
- O usuário não pode agendar serviços consigo mesmo;

**Nota : Quando é criando o banco dedos a relação é feita assim para que o objecto aceite não só o user_id mais também o user**

```js
  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;
```
