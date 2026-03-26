import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ContadorInterativo from "../pages/ContadorInterativo"
import CampoNomeDinamico from "../pages/CampoNomeDinamico"
import CadastroSimples from "../pages/CadastroSimples"
import ListaDeNomes from "../pages/ListaDeNomes"
import ListaDeNomesRemocao from "../pages/ListaDeNomesRemocao"
import ComponentizacaoDaLista from "../pages/ComponentizacaoDaLista"
import CadastroCompleto from "../pages/CadastroCompleto"
import ContadorHistorico from "../pages/ContadorHistorico"
import DesafioFinal from "../pages/DesafioFinal"
import Formulario from "../pages/Formulario";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contadorInterativo" element={<ContadorInterativo />} />
        <Route path="/campoNomeDinamico" element={<CampoNomeDinamico />} />
        <Route path="/cadastroSimples" element={<CadastroSimples />} />
        <Route path="/listaDeNomes" element={<ListaDeNomes />} />
        <Route path="/listaDeNomesRemocao" element={<ListaDeNomesRemocao />} />
        <Route path="/componentizacaoDaLista" element={<ComponentizacaoDaLista />} />  
        <Route path="/cadastroCompleto" element={<CadastroCompleto />} />
        <Route path="/contadorHistorico" element={<ContadorHistorico />} />  
        <Route path="/desafioFinal" element={<DesafioFinal />} /> 
        <Route path="/formulario" element={<Formulario />} />  
      </Routes>
    </BrowserRouter>
  );
}