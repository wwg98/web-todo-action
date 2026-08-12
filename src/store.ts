import type { Todo, TodoCreate, TodoUpdate } from "./types";

export function add(todos: Todo[], input: TodoCreate): Todo[] {
  const id = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  const now = new Date().toISOString();
  const next: Todo = {
    id,
    title: input.title,
    done: false,
    due: input.due,
    createdAt: now,
  };
  return [...todos, next];
}

//완수 여부 전환 함수
export function toggle(todos: Todo[], id: number): Todo[] {
  return todos.map(t =>
    t.id === id ? { ...t, done: !t.done, updatedAt: new Date().toISOString() } : t,
  );
}

// 할일 수정 함수
export function update(todos: Todo[], id: number, patch: TodoUpdate): Todo[] {
  return todos.map(t =>
    t.id === id
      ? {
          ...t,
          ...patch,
          updatedAt: new Date().toISOString(),
        }
      : t,
  );
}

// 핳일 삭제하는 함수
export function remove(todos: Todo[], id: number): Todo[] {
  return todos.filter(t => t.id !== id);
}
