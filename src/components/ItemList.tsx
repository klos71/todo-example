import { TodoItems } from "../App";

export function ItemList({
  items,
  setDoneItem,
}: {
  items: TodoItems[];
  setDoneItem: (id: number) => void;
}) {
  return (
    <div>
      <ol>
        {items.map((i) => {
          return (
            <li
              key={i.id}
              style={{ textDecoration: i.done ? "line-through" : "" }}
            >
              {i.value} <button onClick={() => setDoneItem(i.id)}>Done</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
