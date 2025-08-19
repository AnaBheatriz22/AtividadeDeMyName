
function Pessoa({nome, idade, foto, formacaoacademica, estadocivil, email, quemsou, genero, telefone, dtnasci, cpf }) {

        return(
            <div>
                <h2> Perfil Pessoal</h2>
                <img src={foto}  width="600" height="700" />
          
                <h3> Nome: {nome}</h3>
                <p> Idade: {idade}</p>
                <p>Data De Nascimento:{dtnasci}</p>
                <p>Gênero:{genero}</p>
                <p>Telefone:{telefone}</p>
                <p>Estado Civil:{estadocivil}</p>
                <p>Email:{email}</p>
                <p>Quem sou:{quemsou}</p>
                <p>Formação Acadêmica: {formacaoacademica}</p>
                <p>CPF:{cpf}</p>
            </div>
        )
}
    export default Pessoa;