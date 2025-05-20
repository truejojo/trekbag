import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

const Sidebar = ({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsIncomplete,
  handleMarkAllAsComplete,
}) => {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
      />
    </div>
  );
};

export default Sidebar;
