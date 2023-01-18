# Key no React

## Por que única ?

3 Momentos em que um componente é renderizado novamente no React

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;

---

Deve ter key para ajudar o React a comparar para não recriar o component do zero

## Por que não posso usar o indice do array ?

Isso é devido o indece do array ele quando muda de posição no map não muda

## Closures no React

Sempre q for actualizar uma informação é sempre bom usar uma função

```js
const [likeCount, setLikeCount] = useState(0);
function handleLikeComment() {
  setLikeCount(likeCount + 1);
  setLikeCount(likeCount + 1);
}

// O resultado é 1 porque ele cria apenas um contexto em que likeCount é 0. Isso só em estados
```

_Solução_

```js
const [likeCount, setLikeCount] = useState(0);
function handleLikeComment() {
  const amountLikeComment = likeCount + 1;
  setLikeCount(amountLikeComment);
  setLikeCount(amountLikeComment + 1);
}

// Agora sim será 2
```

```js
const [likeCount, setLikeCount] = useState(0);
function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1;
  });
  // State é o estado mais recente do estado likeCount
  setLikeCount((state) => {
    return state + 1;
  });
  // State é o estado mais recente do estado likeCount
}

// Agora sim será 2
```
