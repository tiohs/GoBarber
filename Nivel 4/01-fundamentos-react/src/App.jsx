import { Header } from "./components/Header";
import { wrapper } from "./App.module.css";
import "./global.css";
function App() {
  return (
    <div>
      <Header />
      <div className={wrapper}>
        <aside>Ola</aside>
        <main>Oka</main>
      </div>
    </div>
  );
}

export { App };
