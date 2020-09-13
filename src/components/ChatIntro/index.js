import React from 'react'

import './index.css'

export default () => {
  return (
    <div className='chatIntro'>
      <img
        src='https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg'
        alt=''
      />
      <h1>Mantena seu celular conectado</h1>
      <h2>
        O Whatsapp conecta ao seu telefone para sincronizar suas mensagens.{' '}
        <br />
        Para reduzir o uso de dados, conect seu telefone a uma rede Wifi.
      </h2>
    </div>
  )
}
