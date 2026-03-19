import { useState } from "react"

function Saudacao() {

    const [nome, setNome] = useState('');

    const handleInput = (e) => {
        setNome(e.target.value)
    }

    return (
        <div>
            <h1>{nome}</h1>
            <input value={nome} type='text' onChange={handleInput} placeholder="Digite seu nome:"/>
        </div>
    )
}

export default Saudacao