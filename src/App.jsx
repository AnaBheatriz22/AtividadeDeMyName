import './App.css'
import MyName from './components/MyName'
import Pessoa from './components/Pessoa';


function App() {

  

  return (
    <div>
      <h1>Meu</h1>
      <Pessoa
      
        nome="Ana Bheatriz Da Silva Santos"
        idade="18"
        estadocivil="Solteira"
        formacaoacademica="Ensino Médio Completo - Curso de informática - Infocurso (Word, Excel, PowerPoint, Photoshop)"
        foto= "public/Captura de tela 2025-07-14 230838.png"
        telefone="(13)98864-5886"
        email="anabheatrizdasilvasantos@gmail.com"
        genero="Feminino"
        dtnasci="22/02/2007"
        quemsou= " Atualmente, sou estudante de Análise e Desenvolvimento de sistemas na ETEC de Itanháem, Desde os meu 13 anos vim desenvolvendo afinidade com a tecnologia e gosto de explorar diferentes ferramentas digitais, telho dominio intermediário do pacote office e estudando mais em logicas de programação, a linguagem que vim tendo mais afinidade do curso de ADS é a PHP. Tenho bastante afinidade também é o uso do Photoshop"
        cpf="553.345.008-47"
      />
    </div>
  )
}

export default App
