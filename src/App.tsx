import React, { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

export interface ITodo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    async function getData() {
      const request = await fetch("https://jsonplaceholder.typicode.com/todos");
      const response = await request.json();

      setTodos(response);
    }

    getData();
  }, []);

  function onDeleteItem(id: number) {
    setTodos((prevState) => {
      return prevState.filter((currentItem) => currentItem.id !== id);
    });
  }

  function onAddItem(newItem: ITodo) {
    setTodos((prevState) => {
      return [...prevState, newItem];
    });
  }

  return (
    <div className="App">
      <h1>Title of react application</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        placeholder="Type your todo ..."
      />

      {todos.map((todoData) => {
        return (
          <TodoItem
            key={todoData.id}
            data={todoData}
            deleteItem={onDeleteItem}
          />
        );
      })}

      <h3>{inputValue}</h3>
    </div>
  );
}

export default App;
