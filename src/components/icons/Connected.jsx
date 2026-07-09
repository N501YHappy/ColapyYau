import React from 'react';

function Connected(params) {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/status/connected.png'} 
      alt="Connected" 
      width={64}
    />
  );
}

export default Connected;