import React, { useState } from 'react';
function ArrayWithCondition() {
    const [items, setItems] = useState(['React JS','Vue JS','Angular JS','Vanilla JS']);
  return (
    <div>
      <h1>Array using Condition</h1>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p> No Front End language is available</p>
      )}
    </div>
  );
}
export default ArrayWithCondition;