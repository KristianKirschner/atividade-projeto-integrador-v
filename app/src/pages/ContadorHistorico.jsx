import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContadorHistorico() {

    const [valor, setValor] = useState(0);

    const [lista, setLista] = useState([]);

    const aumentar = () => {
        setLista([...lista, valor]);
        setValor(valor + 1);
    };

    return (
        <div>
            <Link to="/">Voltar</Link><br />
            <h1>{valor}</h1>
            <button onClick={aumentar} >Incrementar</button>
            <br />
            {
                lista.map((numero, index) =>
                    <li key={index}>{numero}</li>)
            }
        </div>
    );
}