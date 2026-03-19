import { useState } from "react"

function Formulario({ nomes, setNomes }) {
    const [novoItem, setNovoItem] = useState('');

    const handleInput = (e) => {
        setNovoItem(e.target.value)
    };

    const adicionar = () => {
        setNomes([...nomes, novoItem]);
        setNovoItem('');
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Digite um nome'
                value={novoItem}
                onChange={handleInput}
            />
            <button onClick={adicionar}>Adicionar</button>
        </div>
    )
}

export default Formulario