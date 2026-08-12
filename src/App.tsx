import { useEffect, useState } from "react";
import "./App.css";
import type { Todo } from "./types";
import * as S from "./store";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function load(): Todo[] {
  const raw = localStorage.getItem("todos");
  return raw ? (JSON.parse(raw) as Todo[]) : [];
}

function save(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function App() {
  // const [todos, setTodos] = useState<Todo[]>(() => load());
  const [todos, setTodos] = useState<Todo[]>(load);

  useEffect(() => {
    save(todos);
  }, [todos]);

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm
        onAdd={(title: string, due?: string) => setTodos(prev => S.add(prev, { title, due }))}
      />
      <hr />
      <ul>
        {todos.map(t => (
          <TodoItem
            key={t.id}
            todo={t}
            onToggle={() => setTodos(prev => S.toggle(prev, t.id))}
            onDelete={() => setTodos(prev => S.remove(prev, t.id))}
            onEdit={patch => setTodos(prev => S.update(prev, t.id, patch))}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
