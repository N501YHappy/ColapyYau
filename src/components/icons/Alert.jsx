import React from 'react';

function Alert(params) {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/icons/alert.png'} 
      alt="Alert" 
      width={48}
    />
  );
}

export default Alert;