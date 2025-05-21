const ItemList = ({ items, handleToggleItem, handleRemoveItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onToggleItem={handleToggleItem}
          onRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onToggleItem, onRemoveItem }) => {
  const { id, label, packed } = item;

  return (
    <li className='item'>
      <input
        type='checkbox'
        id={id}
        checked={packed}
        onChange={() => onToggleItem(id)}
      />
      <label htmlFor={id}>{label}</label>
      <button onClick={() => onRemoveItem(id)}>X</button>
    </li>
  );
};
