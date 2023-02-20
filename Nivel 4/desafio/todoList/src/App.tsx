import { v4 as uuid } from "uuid";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";

import styled from "./App.module.css";
import "./global.css";
import { Item } from "./components/Item";
import { useState, useEffect } from "react";

export interface ItemProps {
  id: string;
  name: string;
  isCompleted: boolean;
}

function App() {
  const [itemList, setItemList] = useState<ItemProps[]>(
    !localStorage.getItem("@todo-ignite-09283jd37r37fg8g")
      ? []
      : JSON.parse(localStorage.getItem("@todo-ignite-09283jd37r37fg8g") as any)
  );
  const [item, setItem] = useState("");
  const [isCompletes, setIsCompletes] = useState(0);

  useEffect(() => {
    const jsonTask = JSON.stringify(itemList);
    localStorage.setItem("@todo-ignite-09283jd37r37fg8g", jsonTask);
    const completes = itemList.filter((a) => a.isCompleted == true).length;
    setIsCompletes(completes);
  }, [itemList]);

  function handleDelete(id: string) {
    const newItemList = itemList.filter((item: ItemProps) => item.id === id);
    setItemList(newItemList);
  }
  function handleChangeIsCompleted(index: number) {
    itemList[index].isCompleted = !itemList[index].isCompleted;
    setItemList([...itemList]);
  }
  function handleAddItem() {
    if (item) {
      const newItem = {
        id: uuid(),
        name: item,
        isCompleted: false,
      };
      setItem("");
      setItemList([newItem, ...itemList]);
    } else {
      alert("Digite um texto para adicionar na tua tarefa");
    }
  }
  return (
    <div>
      <Header />
      <div className={styled.wrapper}>
        <div className={styled.addTodo}>
          <input
            type="text"
            placeholder="Adicionar uma nova tarefa "
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button onClick={handleAddItem}>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>
      </div>
      <div className={styled.content}>
        <div className={styled.header}>
          <div className={styled.count}>
            <strong className={styled.blue}>Tarefas criadas</strong>{" "}
            <span>{itemList.length}</span>
          </div>
          <div className={styled.count}>
            <strong className={styled.purple}>Concluidas</strong>
            <span>
              {isCompletes > 0 ? isCompletes + " de" : ""} {itemList.length}
            </span>
          </div>
        </div>
        <div className={styled.listItem}>
          {itemList.map((item: ItemProps, index) => {
            return (
              <Item
                key={item.id}
                index={index}
                onDelete={handleDelete}
                name={item.name}
                id={item.id}
                isCompleted={item.isCompleted}
                changeIsCompleted={handleChangeIsCompleted}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
