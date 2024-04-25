
import './App.css'
import React, { useState } from 'react';
import AtivoInativo from './components/AtivoInativo';

const App = () => {
  const [isActive, setIsActive] = useState(true); 
  
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='status'>
      <h1>
          [M1S10] EX 5 - Criando condicional nos componentes.
        </h1>
      <p>Condicional nos Componentes: 'Verde' para ativo e 'vermelho' para inativo.</p>
      <button onClick={toggleActive}>Alternar Status</button>
      <AtivoInativo isActive={isActive} />
    </div>
  );
};

export default App;
