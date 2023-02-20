import styled from "./item.module.css";
import { v4 as uuid } from "uuid";
import { Circle, Trash, CheckCircle } from "phosphor-react";
import { useState } from "react";

interface propsItem {
  name: string;
  id: string;
  onDelete: (id: string) => void;
  changeIsCompleted: (index: number) => void;
  index: number;
  isCompleted: boolean;
}
export function Item({
  name,
  onDelete,
  id,
  isCompleted,
  changeIsCompleted,
  index,
}: propsItem) {
  function handleState() {
    console.log(uuid());
  }
  return (
    <div className={styled.item}>
      <button
        className={styled.checkbox}
        onClick={() => changeIsCompleted(index)}
      >
        {isCompleted ? (
          <CheckCircle size={20} weight="fill" color="#5E60CE" />
        ) : (
          <Circle size={20} weight="bold" color="#4eabde" />
        )}
      </button>
      <p className={isCompleted ? "done" : ""}>{name}</p>
      <button
        className={styled.delete}
        onClick={() => {
          onDelete(id);
        }}
      >
        <Trash size={20} className={styled.delete} />
      </button>
    </div>
  );
}
