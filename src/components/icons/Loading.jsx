import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <img 
      className="loading-spinner"
      src={process.env.PUBLIC_URL + '/status/loading.png'} 
      alt="Loading" 
      width={64}
    />
  );
}

export default Loading;