import React, { useState } from 'react';
import './Mega.css'

export default ({ quant }) => {
  const gerarNumeroDistinto = (max, min, array) => {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

    return array.includes(aleatorio) ? 
      gerarNumeroDistinto(max, min, array) :
      aleatorio;
  }

  const gerarNumeros = (quant) => {
    const numeros = Array(quant).fill(0).reduce((array) => {
      const novoNumero = gerarNumeroDistinto(60, 1, array)
      return [ ...array, novoNumero ]
    }, []).sort((a, b) => a - b)
    
    return numeros;
  }

  const [qtde, setQtde] = useState(quant || 6)
  const [numeros, setNumeros] = useState(Array(qtde).fill(0))

  return (
    <div className='Mega'>
      <h2>Mega</h2>
      <h3>{ numeros.join(' ') }</h3>
      <div>
        <label>Quantidade de Números</label>
        <input type="number" value={ qtde } onChange={ e => setQtde(+e.target.value) } />
      </div>
      <button onClick={ _ => setNumeros(gerarNumeros(qtde)) }>Gerar Números</button>
    </div>
  )
}