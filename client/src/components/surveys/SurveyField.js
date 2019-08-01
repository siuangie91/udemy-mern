import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  // props.input has all the event handlers
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};
