import React from 'react';

function Failure(params) {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/icons/failure.png'} 
      alt="Failure" 
      width={48}
    />
  );
}

export default Failure;