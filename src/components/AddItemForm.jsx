import Button from './Button';

const AddItemForm = () => {
  return (
    <form>
      <label htmlFor='input'>Add an item</label>
      <input id='input' name='input' type='text' />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
