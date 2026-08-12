import { useState } from "react";

interface Props {
  onAdd: (title: string, due?: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");

  //SyntheticEvent -> 가상이벤트, 가짜이벤트
  function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), due || undefined);
    setTitle("");
    setDue("");
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}></input>
      <input
        type="date"
        value={due}
        onChange={e => {
          setDue(e.target.value);
        }}></input>
      <button type="submit"> 추가</button>
    </form>
  );
}
