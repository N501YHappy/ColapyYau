import React from 'react';

function Success(params) {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/icons/success.png'} 
      alt="Success" 
      width={48}
    />
  );
}

export default Success;