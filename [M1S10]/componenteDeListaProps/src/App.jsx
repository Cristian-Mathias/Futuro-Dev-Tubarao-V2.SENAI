
import './App.css'
import ListaAlunos from './components/ListaAlunos'

function App() {

  const lista = [
    {
      id:1,
      nome: 'João Vigario Poguel',
      cidade: 'Tubarão - SC',
      bairro: 'Verde',
      endereco: 'CodaFofo',
      numero: 10,
     
    },
    {
      id:2,
      nome: 'Maria Catarina Mendes',
      cidade: 'Capivari de Baixo - SC',
      bairro: 'Amarela',
      endereco: 'Pomodoro Invertido',
      numero: 130,
     
    },
    {
      id:3,
      nome: 'Breno Carneiro Braga',
      cidade: 'Laguna - SC',
      bairro: 'Humaita',
      endereco: 'JavaScript',
      numero: 230,
     
    },
  ]

  return (
    <>
      <div>
        <h1>
        [M1S10] EX 4 - Crie um Componente de Lista que Receba por Props os dados
        </h1>
        <h2>Lista de alunos</h2>
        <ListaAlunos usuarios={lista}/> 
      </div>
    </>
  )
}

export default App


