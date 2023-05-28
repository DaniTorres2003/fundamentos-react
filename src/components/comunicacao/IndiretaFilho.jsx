import React from 'react';

export default ({ fornecerInformacoes }) => {
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50
  
  const gerarNerd = () => Math.random() > 0.5

  return (
    <div>
      <div>
        Filho
      </div>

      <button onClick={ (e) => {
        fornecerInformacoes('João', gerarIdade(), gerarNerd())
      } }>
        Fornecer Informações
      </button>
    </div>
  )
}