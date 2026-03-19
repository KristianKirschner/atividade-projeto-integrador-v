import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListaDeNomes() {

    const [nomes, setNomes] = useState([]);
    const [novoItem, setNovoItem] = useState('');

    const handleInput = (e) => {
        setNovoItem(e.target.value)
    };

    const adicionar = () => {
        setNomes([...nomes, novoItem]);
    }

    const remover = (index) => {
        const nomesAtualizado = nomes.filter((_, i) => i !== index);
        setNomes(nomesAtualizado);
    };


    return (
        <div>
            <Link to="/">Voltar</Link><br />
            <input type='text' placeholder='Digite um nome' value={novoItem} onChange={handleInput}></input>
            <button onClick={adicionar}>Adicionar</button>
            <br />
            {
                nomes.map((nome, index) =>
                    <>
                    <li key={index}>{nome}</li>
                    <button onClick={() => remover(index)}>Remover</button>
                    </>)
            }
        </div>
    );
}
