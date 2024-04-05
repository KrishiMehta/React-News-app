import React from 'react';

export default function Spinner() {
  return (
    <div className="text-center">
      <img src={require('./loading.gif').default} alt="loading" />
    </div>
  );
}
