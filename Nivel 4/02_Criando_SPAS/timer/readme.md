### Layout da Rota 
Para definir o que não muda durante a renderização do app
Se a gente tiver dois Layout em a nossa routes vai ser assim 
Primeiro criar o component layout 
```tsx
  import { Outlet } from 'react-router-dom';
  
  export function DefaultLayout () {
    return (
    // Component de fault que pode ser o Header da aplicação 
      <Header />
    // E por fim o Outlet para dizer onde deve ser renderizado o component 
    <Outlet />
    )
  }
```

```tsx
  <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
       <Route/>
       <Route path="/admin" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
       <Route/>
  </Routes>
```

Logo as rotas que eu terei são :
```bash
http://localhost:3000/
http://localhost:3000/history

http://localhost:3000/adimn
http://localhost:3000/admin/history
```

# Modo controlled e uncontrolled 

**Controlled** - Mater em em tempo real a informação do form 
**Uncontrolled** - Não mate as atualizações em real time mais tem mais fluidez 

**Prop Drilling** - Quando a gente tem muitos propriedades Apenas para
comunicação entre componente para evitar isso a gente usa **ContextAPI** permite
compartilhar informações entre vários componentes ao mesmo tempo ao nosso tempo 
