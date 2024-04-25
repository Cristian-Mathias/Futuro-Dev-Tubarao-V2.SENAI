import React from 'react';

const AtivoInativo = ({ isActive }) => {
  return (
    <div className='ativo_inativo' style={{ color: isActive ? 'green' : 'red' }}>
      {isActive ? 'Ativo' : 'Inativo'}
    </div>
  );
};

export default AtivoInativo;
