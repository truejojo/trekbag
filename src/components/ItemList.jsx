import { useMemo, useState } from 'react';
import Select from 'react-select';

const sortingOptions = [
  { label: 'Sort by default', value: 'default' },
  { label: 'Sort by packed', value: 'packed' },
  { label: 'Sort by unpacked', value: 'unpacked' },
];

const ItemList = ({ items, handleToggleItem, handleRemoveItem }) => {
  const [sortBy, setSortBy] = useState('default');

  const handleSortingOptions = (selectedOption) =>
    setSortBy(selectedOption.value);

  /* Bei jedem Rendern der Seite wird die sortier Funktionalität ausgeführt, selbst wenn sich nichts geändert hat.
  Mit useMemo wird dies verhindert
  Da nun die sortier Funktionalität nur dann ausgeführt, wenn sich die items oder sortBy geändert haben.
  */
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed;
        } else if (sortBy === 'unpacked' || sortBy === 'default') {
          return a.packed - b.packed;
        } else {
          return items;
        }
      }),
    [items, sortBy],
  );

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyItemView />}

      {items.length >= 0 && (
        <section className='sorting'>
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(selectedOption) => handleSortingOptions(selectedOption)}
          />
        </section>
      )}

      {sortedItems.map((item) => (
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

const EmptyItemView = () => {
  return (
    <div className='empty-state'>
      <h2>No items in the list</h2>
      <p>Add some items to get started!</p>
    </div>
  );
};
