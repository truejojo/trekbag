import React from 'react';

const Counter = ({ getAllItemsCount, getPackedItemsCount }) => {
  return (
    <div>
      <p>
        <strong>{getPackedItemsCount()}</strong> / {getAllItemsCount()} Items
        packed
      </p>
    </div>
  );
};

export default Counter;
