import { useState } from "react";
import { AddItem } from "./components/AddItem";
import { ItemList } from "./components/ItemList";

export interface TodoItems {
  id: number;
  value: string;
  done: boolean;
}

function App() {
  const [items, setItems] = useState<TodoItems[]>([]);

  function addNewItem(value: string) {
    const item: TodoItems = {
      id: items.length,
      value: value,
      done: false,
    };
    const newList = [...items, item];
    setItems(newList);
  }

  function checkDone(id: number) {
    const copy = [...items];
    const index = items.findIndex((i) => i.id === id);

    copy[index].done = true;
    setItems(copy);
  }

  return (
    <div>
      <AddItem addItem={(value) => addNewItem(value)} />
      <ItemList items={items} setDoneItem={(id) => checkDone(id)} />
    </div>
  );
}

export default App;
