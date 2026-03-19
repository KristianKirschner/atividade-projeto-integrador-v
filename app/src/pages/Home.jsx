import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Atividades de fixação</h1>

      <Link to="/contadorInterativo">Contador Interativo</Link><br/>
      <Link to="/campoNomeDinamico">Campo de Nome Dinâmico</Link><br/>
      <Link to="/cadastroSimples">Cadastro Simples</Link><br/>
      <Link to="/listaDeNomes">Lista de Nomes</Link><br/>
      <Link to="/listaDeNomesRemocao">Lista de Nomes com Remocao</Link><br/>      
    </div>
  );
}