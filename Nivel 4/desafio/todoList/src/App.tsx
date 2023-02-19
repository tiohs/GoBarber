import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";

import styled from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styled.wrapper}>
        <div className={styled.addTodo}>
          <input type="text" placeholder="Adicionar uma nova tarefa " />
          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
