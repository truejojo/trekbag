import Button from './Button';

const buttons = [
  { id: '1', text: 'Mark to list' },
  { id: '2', text: 'Mark all as incomplete' },
  { id: '3', text: 'Reset to initial' },
  { id: '4', text: 'Remove all items' },
];

const ButtonGroup = () => {
  return (
    <section className='button-group'>
      {buttons.map((button) => (
        <Button key={button.id} type='secondary'>
          {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
