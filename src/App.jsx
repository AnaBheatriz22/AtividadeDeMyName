import './App.css'
import MyName from './components/MyName'
import Pessoa from './components/Pessoa';

function App() {

  

  return (
    <div>
      <h1>Portifólio</h1>
      <Pessoa
        nome="Ana Bheatriz"
        idade="18"
        profissao="Programadora"
        foto=""
      />
    </div>
  )
}

export default App
