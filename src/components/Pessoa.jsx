
function Pessoa({nome, idade, profissao, foto, formacaoacademica, email, quemsou}) {

        return(
            <div>
                <h2> Perfil Pessoal</h2>
                <img src={foto}  width="600" height="700"/>
                <h3> Nome: {nome}</h3>
                <p> Idade: {idade}</p>
                <p>Email:</p>
                <p>Quem sou:</p>
                <p>Formação Acadêmica: {formacaoacademica}</p>


            </div>
        )
}
    export default Pessoa;