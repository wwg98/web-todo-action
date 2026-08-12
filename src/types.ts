export type TodoId = number;

export interface Todo {
  id: TodoId;
  title: string;
  done: boolean;
  due?: string;
  createdAt: string;
  updatedAt?: string;
}

export type TodoCreate = Pick<Todo, "title" | "due">;
export type TodoUpdate = Partial<Omit<Todo, "id" | "createdAt">>;
