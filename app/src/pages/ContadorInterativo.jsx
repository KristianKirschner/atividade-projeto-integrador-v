import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContadorInterativo() {

    const [valor, setValor] = useState(0);

    const aumentar = () => {
        setValor(valor + 1)
    };

    const diminuir = () => {
        setValor(valor - 1)
    };


    return (
        <div>
            <Link to="/">Voltar</Link><br/>
            <h1>{valor}</h1>
            <button onClick={aumentar}>Incrementar</button>
            <button onClick={diminuir}>Decermentar</button>
        </div>
    );
}