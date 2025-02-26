import React from 'react';
function ArrayComponent() {
  const items = ['Autumn', 'Spring', 'Summer','Winter'];
  return (
    <div>
      <h1> Seasons Names</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
  </ul>
    </div>
  );
}
export default ArrayComponent;
