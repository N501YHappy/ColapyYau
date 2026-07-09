import React from 'react';

function Disconnected(params) {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/status/disconnected.png'} 
      alt="Disconnected" 
      width={48}
    />
  );
}

export default Disconnected;