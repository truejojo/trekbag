import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';

import { useEffect, useState } from 'react';

const initialItemsList = [
  { id: '1', label: 'Item 1', packed: false },
  { id: '2', label: 'Item 2', packed: true },
  { id: '3', label: 'Item 3', packed: false },
  { id: '4', label: 'Item 4', packed: false },
];

function App() {
  const [items, setItems] = useState([]);
  // const [items, setItems] = useState(
  //   () => JSON.parse(localStorage.getItem('items')) || initialItemsList,
  // );
  // const [items, setItems] = useState(() => {
  //   const storedItems = localStorage.getItem('items');
  //   // Prüfe, ob Daten vorhanden sind
  //   if (storedItems) {
  //     try {
  //       const parsedItems = JSON.parse(storedItems);
  //       // Stelle sicher, dass es ein Array ist
  //       if (Array.isArray(parsedItems)) {
  //         return parsedItems;
  //       }
  //     } catch (error) {
  //       console.error('Fehler beim Parsen der gespeicherten Items:', error);
  //     }
  //   }
  //   // Fallback auf initialItemsList, wenn keine/ungültige Daten
  //   return initialItemsList;
  // });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime().toString(),
      label: newItemText,
      packed: false,
    };

    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const handleRemoveItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: true })),
    );
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: false })),
    );
  };

  const handleRemoveAllItems = () => setItems([]);

  const handleToggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item,
      ),
    );
  };

  const handleResetToInitial = () => setItems(initialItemsList);

  const getAllItemsCount = () => items.length;

  const getPackedItemsCount = () => items.filter((item) => item.packed).length;

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          getAllItemsCount={getAllItemsCount}
          getPackedItemsCount={getPackedItemsCount}
        />
        <ItemList
          items={items}
          handleToggleItem={handleToggleItem}
          handleRemoveItem={handleRemoveItem}
        />
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
