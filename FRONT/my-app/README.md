Com o styled componet é possivel importa propriedade

_Arquivo react.js_

```jsx
<Title error>
	Main
	<small>menor</small>
</Title>
```

_Arquivo styledComponent_

```js
export const Title = styled.h1`
	font-size: 24px;
	color: ${props => (props.error ? 'red' : '#7159c1')};
	font-family: Arial, Helvetica, sans-serif;

	small {
		font-size: 14px;
		color: #333;
	}
`;
```

Quando devo criar o componente estilizado ?

- Quando o cambiamento é e maior
  Ex : `<form> <input></input> . ... Mais outros componentes </form>`

### _Passar atributos em tags via styled componentes_

Neste codigo vou passar atributos com o componente attrs({ type : 'submit' })

```js
export const SubmitButton = styled.button.attrs({
	type: 'submit',
})`
	background: #7159c1;
	border: 0;
	padding: 0 15px;
	margin-left: 10px;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
```

## Acessar as propriedades do elemento por Styled Componente

```js
export const SubmitButton = styled.button.attrs({
	type: 'submit',
})`
	background: #7159c1;
	border: 0;
	padding: 0 15px;
	margin-left: 10px;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
```

## Aplicando css dentro de um template styled componente

export const SubmitButton = styled.button.attrs(props => ({
type : 'submit',
disabled : props.loadings,
}))`
background: #7159c1;
border: 0;
padding: 0 15px;
margin-left: 10px;
border-radius: 4px;

display: flex;
justify-content: center;
align-items: center;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
    /* Inicio */
    ${
      props => props.loadings &&
      css`
         svg {
            animation: ${rotate} 2s linear infinite;
         }
      `
    }

/_ Fim _/
`;
