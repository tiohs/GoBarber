# Redux 

Porque não emportamos o browserRouter 

Quando não é um componente de html e queros sectar como propriedade no styled component devemos chamar o componente e add no styled 

Ex : 

```js 
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cart = styled(Link)`

`;

```