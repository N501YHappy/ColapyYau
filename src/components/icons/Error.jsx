import React from 'react';

function Error(params) {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/icons/error.png'} 
      alt="Error" 
      width={48}
    />
  );
}

export default Error;