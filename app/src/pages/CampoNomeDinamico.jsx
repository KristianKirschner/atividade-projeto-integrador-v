import { Link } from "react-router-dom";
import Saudacao from "../components/Saudacao"

export default function ContadorInterativo() {


    return (
        <div>
            <Link to="/">Voltar</Link>
            <Saudacao />
        </div>
    );
}
