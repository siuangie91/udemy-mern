import React from 'react';

export default ({ input, label }) => {
  // props.input has all the event handlers
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
