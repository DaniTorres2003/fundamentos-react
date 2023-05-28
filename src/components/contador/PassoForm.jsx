import React from 'react';

export default ({ passo, setPasso }) => {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input 
        id="passoInput" 
        type="number" 
        value={ passo } 
        onChange={ e => setPasso(+e.target.value) } 
      />
    </div>
  );
}