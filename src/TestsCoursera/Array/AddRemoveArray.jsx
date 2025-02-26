import React, { useState } from 'react';
function AddRemoveFromArray() {
  const [items, setItems] = useState(['Autumn', 'Spring', 'Summer','Winter']);
  const [inputValue, setInputValue] = useState('');
  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default AddRemoveFromArray