import { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastroSimples() {
    
    const [pessoa, setPessoa] = useState({nome: 'a', email: 'a'})
    
    const handleInputName = (e) => {
        setPessoa({...pessoa, nome: e.target.value})
    }

    const handleInputEmail = (e) => {
        setPessoa({...pessoa, email: e.target.value})
    }

    return (
        <div>
            <Link to="/">Voltar</Link>
            <h1>Nome: {pessoa.nome} </h1>
            <h1>Email: {pessoa.email} </h1>

            <input value={pessoa.nome} type='text' onChange={handleInputName} placeholder="Digite seu nome:"/>
            <input value={pessoa.email} type='text' onChange={handleInputEmail} placeholder="Digite seu email:"/>
        </div>
    );
}
