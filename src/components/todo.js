import Item from "./item";
import ItemForm from "./itemForm";

import { useState } from "react";

export default function ToDo() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(track) {
    const updatedItems = items.filter((item) => {
      return item.id !== track.id;
    });

    setItems(updatedItems);
  }

  function togglePlayed(track) {
    const updatedItems = items.map((item) => {
      if (item.id === track.id) {
        item.done = !item.done;

        return item;
      } else return item;
    });

    setItems(updatedItems);
  }

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              remove={removeItem}
              togglePlayed={togglePlayed}
            />
          );
        })}
      </ul>
      <ItemForm addItem={addItem} />
    </div>
  );
}
