import React, { useState } from 'react';

function Pessoas() {
    const [nomes, setNomes] = useState(['João', 'Maria', 'Carlos']);
    const [novoItem, setNovoItem] = useState("");
    const adicionar = () => {
        setNomes([...nomes, novoItem]);
    };

    const remover = (index) => {
        const nomesAtualizado = nomes.filter((_, i) => i !== index);
        setNomes(nomesAtualizado);
    };

    return (
        <div>
            <input type='text' placeholder='Digite um nome' value={novoItem} onChange={(e) => setNovoItem(e.target.value)}></input>
            <button onClick={adicionar}>adicionar</button>
            {nomes.map((nome, index) =>
                <><li key={index}>{nome}</li><button onClick={() => remover(index)}>Remover</button></>)}
        </div>
    )
}
export default Pessoas