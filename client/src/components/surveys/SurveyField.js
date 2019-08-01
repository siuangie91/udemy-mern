import React from 'react';

export default ({ input }) => {
  // props.input has all the event handlers
  return (
    <div>
      <input {...input} />
    </div>
  );
};
