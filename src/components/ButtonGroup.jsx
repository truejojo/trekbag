import Button from './Button';

const ButtonGroup = () => {
  return (
    <section className='button-group'>
      <Button type='secondary'>Mark to list</Button>
      <Button type='secondary'>Mark all as incomplete</Button>
      <Button type='secondary'>Reset to initial</Button>
      <Button type='secondary'>Remove all items</Button>
    </section>
  );
};

export default ButtonGroup;
