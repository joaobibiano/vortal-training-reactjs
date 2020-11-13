import React from "react";
import "./index.css";
import { ITodo } from "../App";
import { ReasonInput } from "./ReasonInput";

interface IProps {
  data: ITodo;
  deleteItem(id: number): void;
}

export default function TodoItem({ data, deleteItem }: IProps) {
  return (
    <div className="todoContainer">
      <p>Id: {data.id}</p>
      <p>Title: {data.title}</p>
      <div>Completed: {data.completed ? <p>OK</p> : <ReasonInput />}</div>
      <p>UserId: {data.userId}</p>

      <button
        className="todoItemDeleteButton"
        onClick={() => deleteItem(data.id)}
      >
        DELETE
      </button>
    </div>
  );
}
