import { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastroCompleto() {

    const [pessoa, setPessoa] = useState({ nome: '', email: '' })
    const [lista, setLista] = useState([])

    const handleInputName = (e) => {
        setPessoa({ ...pessoa, nome: e.target.value })
    }

    const handleInputEmail = (e) => {
        setPessoa({ ...pessoa, email: e.target.value })
    }

    const salvar = () => {
        if (pessoa.nome != '') {
            setLista([...lista, { ...pessoa }]);
            setPessoa({ nome: '', email: '' })
        } else {
            alert("Nome não pode ser vazio")
        }
    }

    return (
        <div>
            <Link to="/">Voltar</Link>
            <br />
            <input value={pessoa.nome} type='text' onChange={handleInputName} placeholder="Digite seu nome:" />
            <input value={pessoa.email} type='text' onChange={handleInputEmail} placeholder="Digite seu email:" />
            <button onClick={salvar} >Salvar</button>
            <br />
            {
                lista.map((pessoa, index) =>
                    <li key={index}>Email: {pessoa.nome} Nome: {pessoa.email} </li>)
            }

        </div>
    );
}
