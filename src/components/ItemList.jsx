const ItemList = ({ items, handleToggleItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onToggle={handleToggleItem} />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onToggle }) => {
  const { id, label, packed } = item;

  return (
    <li className='item'>
      <input
        type='checkbox'
        id={id}
        checked={packed}
        onChange={() => onToggle(id)}
      />
      <label htmlFor={id}>{label}</label>
      <button onClick={() => {}}>X</button>
    </li>
  );
};
