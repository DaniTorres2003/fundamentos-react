import React from 'react';

export default ({ setInc, setDec }) => {
  return (
    <div>
      <button onClick={ setInc } >+</button>
      <button onClick={ setDec } >-</button>
    </div>
  )
}