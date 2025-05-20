import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';

import { useState } from 'react';

const itemsList = [
  { id: '1', label: 'Item 1', packed: false },
  { id: '2', label: 'Item 2', packed: true },
  { id: '3', label: 'Item 3', packed: false },
  { id: '4', label: 'Item 4', packed: false },
];

function App() {
  const [items, setItems] = useState(itemsList);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime().toString(),
      label: newItemText,
      packed: false,
    };

    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(itemsList);
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: false })),
    );
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: true })),
    );
  };

  const handleToggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item,
      ),
    );
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} handleToggleItem={handleToggleItem} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
