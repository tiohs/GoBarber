import { createContext, useContext } from 'react'

const user = createContext({
  name: 'Hamilton Silva',
})
function Footer() {
  const { name } = useContext(user)
  return <div>Footer do {name}</div>
}
function Header() {
  const { name } = useContext(user)
  return <div>Header do {name}</div>
}
export function Home() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}
