

function ListaAlunos({ usuarios }) {
    return (
      <>
        {usuarios.map((usuario) => (
          <div key={usuario.id}>
            {`NOME: ${usuario.nome};  
            CIDADE: ${usuario.cidade};  
            BAIRRO: ${usuario.bairro};  
            RUA: ${usuario.endereco};  
            NÚMERO: ${usuario.numero}.`}
          </div>
        ))}
      </>
    );
  }
  
  export default ListaAlunos;
  