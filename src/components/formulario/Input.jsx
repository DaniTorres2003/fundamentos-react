import React, { useState } from 'react';

export default props => {
  const [valor, setValor] = useState('Inicial')

  const onChange = (e) => {
    setValor(e.target.value)
  }  

  return (
    <div>
      <div>
      <input value={ valor } onChange={ onChange } />
      </div>

      <div>
        <input value={ valor } readOnly />
      </div>

      <div>
        <input value={ undefined } />
      </div>
    </div>
  )
}