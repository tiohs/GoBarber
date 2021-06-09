# Flex 

flex-directio - ele diz como vai ser alinhado os componentes dentro dele 

Por padrão é sempre row 

Alinhando conteudo 

## Comportamento quando o flex-direction é row 
```css


align-items - ele alinha verticalmente  y

justify-content - ele alinha horizontalmente x 
```
Propriedades 

```css
align-items : center; // Alinha as propriedade no centro do encho y
align-items : flex-start; // Alinha no inicio do encho y
align-items : flex-end; // Alinha no fim das propriedade no encho y

justify-content : center; // Alinha as propriedade no centro do encho x

justify-content : flex-start; // Alinha no inicio do encho x

justify-content : flex-end; // Alinha no fim das propriedade no encho y

justify-content : space-between; // Ocupando todos os espaços do encho x em espaços iguais não coloca espaço no inicio nem no fim 

justify-content : space-between; // Ocupando todos os espaços do encho x em espaços iguais metendo espaço no fim 

```

## Comportamento quando o flex-direction é column 

 align-items - é sempre o contrario do flex-directio quer dizer o contraio do enxo quando está em horizontal ele alinha vertical 


 ## Redimensionamento das propriedades 

flex-grow : 1 ele diz que o elemento aceita ser aumentado para caber no elemento pai 

flex-shrink : por defeito é 1 porque ele reduz o elemento de modo que caba no componente 

flex: 1 0; ele é a soma da propriedade do flex-grow e flex-shrink 

## Quebra de linhas 
 
 Essas propriedades são ensiridas no container do flex ou div principal 

` flex-wrap` : wrap; ele quebra a linha imaginamos que a tela é de 200px; e temos 3 elementos do mesmo tamanha 100px; o 3 elemento ira para baixo 

 align-content : ele alinha os elementos quando estão em mais de uma linha Ex : no flex-wrap mais isso no encho x quando flex-direction : row    

O align-content tem as propriedades do justify-content 

flex-wrap : wrap-reverse ele mete tudo no reverso 

## Ordenação 

