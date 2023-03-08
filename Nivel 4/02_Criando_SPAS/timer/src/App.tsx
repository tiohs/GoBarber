import { ThemeProvider } from 'styled-components';
import { Button } from './Components/Button';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant='danger'/>
      <Button variant='primary'/>
      <Button variant='success'/>
      <Button variant='secondary'/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { App }
