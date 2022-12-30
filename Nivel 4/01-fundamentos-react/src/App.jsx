import { Header } from "./components/Header";
import { wrapper } from "./App.module.css";
import { Post } from "./components/Post";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <div>
      <Header />
      <div className={wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export { App };
