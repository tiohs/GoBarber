import { Header } from "./components/Header";
import { wrapper } from "./App.module.css";
import { Post } from "./components/App";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <div>
      <Header />
      <div className={wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Hamilton Silva"
            content="Olá mundo estamos vivos graças a Deus "
          />
          <Post
            author="Tio HS"
            content="Olá mundo estamos vivos graças a Deus ! "
          />
        </main>
      </div>
    </div>
  );
}

export { App };
