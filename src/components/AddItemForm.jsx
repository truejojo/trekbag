import { useRef, useEffect } from 'react';
import Button from './Button';

const AddItemForm = ({ onAddItem }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const itemText = formData.get('input').trim();

    if (!itemText) {
      resetInput();
      return;
    }
    onAddItem(itemText);

    resetInput();
  };

  const resetInput = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='input'>Add an item</label>
      <input id='input' ref={inputRef} name='input' />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
