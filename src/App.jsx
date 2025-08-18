import './App.css'
import MyName from './components/MyName'
import Pessoa from './components/Pessoa'
import styles from './components/Pessoa.module.css';

function App() {

  

  return (
    <div>
      <h1>Atividade Perfil Pessoal</h1>
      <Pessoa
        nome="Ana Bheatriz Da Silva Santos"
        idade="18"
        formacaoacademica="Ensino Médio Completo -
        Curso de informática - Infocurso (Word, Excel, PowerPoint, Photoshop)"
        foto= "public/Captura de tela 2025-07-14 230838.png"
        quemsou= "Atualmente, sou estudante de Análise e Desenvolvimento de sistemas na ETEC de Itanháem, Desde os meu 13 anos vim desenvolvendo afinidade com a tecnologia e gosto de explorar diferentes ferramentas digitais, telho dominio intermediário do pacote office e estudando mais em logicas de programação, a linguagem que vim tendo mais afinidade do curso de ADS é a PHP. Tenho bastante afinidade também é o uso do Photoshop."
      />
     
    </div>
  )
}

export default App
