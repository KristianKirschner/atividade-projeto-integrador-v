import { useState } from "react";
import { Link } from "react-router-dom";
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import Item from "../components/Item"

export default function ComponentizacaoDaLista() {
    const [nomes, setNomes] = useState([]);

    return (
        <div>
            <Link to="/">Voltar</Link>

            <Formulario nomes={nomes} setNomes={setNomes} />

            <Lista>
                {nomes.map((nome, index) => (
                    <Item key={index} nome={nome} />
                ))}
            </Lista>
        </div>
    );
}