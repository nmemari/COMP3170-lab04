import { useState } from "react";
import { nanoid } from "nanoid";

export default function ItemForm(props) {
  const [item, setItem] = useState("");

  function handleItemChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    //add song to playlist
    e.preventDefault();
    const newItem = {
      item,
      done: false,
      id: nanoid()
    };
    props.addItem(newItem);

    //reset title and artist
    setItem("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          To-Do Item:
          <input type="text" onChange={handleItemChange} value={item} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
