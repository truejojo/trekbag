import { useState } from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ item }) => {
  const { id, label, packed } = item;
  const [isChecked, setIsChecked] = useState(packed);

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className='item'>
      <input
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={handleIsChecked}
      />
      <label htmlFor={id}>{label}</label>
      <button onClick={() => {}}>X</button>
    </li>
  );
};
