export default function Item(props) {
  const item = props.item;

  function handleDelete() {
    props.remove(item);
  }

  function handleStatusChange() {
    props.togglePlayed(item);
  }

  return (
    <li className="song">
      <div className="song-details">
        <p>
          <span>
            <input type="checkbox" onChange={handleStatusChange} />
            {item.done === true ? <del>{item.item}</del> : item.item}
          </span>
        </p>
      </div>
      <button onClick={handleDelete}>Remove</button>
    </li>
  );
}
