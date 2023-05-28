import React from 'react';

export default ({ max, min }) => {
  return (
    <>
      <p>Valor Mínimo: { min }</p>
      <p>Valor Máximo: { max }</p>
      <p>Valor Aleatório: { parseInt(Math.random() * (max - min) + min) }</p>
    </>
  );
}