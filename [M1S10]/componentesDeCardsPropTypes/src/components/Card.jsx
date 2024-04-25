

import PropTypes from 'prop-types'


  function Card(props){
   
    return (
      <div className='Card'>
        <p>Título: {props.titulo}</p>
        <p>Descrição: {props.descricao}</p>
        <p>Valor: {props.valor}</p>
      </div>
    );
  };
  Card.propTypes ={
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired
  };
  
  export default Card;


  
