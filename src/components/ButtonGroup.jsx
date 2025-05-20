import Button from './Button';

const ButtonGroup = ({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsIncomplete,
  handleMarkAllAsComplete,
}) => {
  const buttons = [
    {
      id: '1',
      text: 'Mark all as complete',
      onClick: handleMarkAllAsComplete,
    },
    {
      id: '2',
      text: 'Mark all as incomplete',
      onClick: handleMarkAllAsIncomplete,
    },
    {
      id: '3',
      text: 'Reset to initial',
      onClick: handleResetToInitial,
    },
    {
      id: '4',
      text: 'Remove all items',
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className='button-group'>
      {buttons.map((button) => (
        <Button key={button.id} buttonType='secondary' onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
