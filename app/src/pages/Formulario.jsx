import { useState } from "react";
import { Link } from "react-router-dom";

export default function Formulario() {
  const [form, setForm] = useState({
    nome: "a",
    email: "",
    cidade: "",
    perfil: "",
    receberNovidades: false,
    observacoes: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Dados: ", form);
  }

  return (
    <div>
      <Link to="/">Voltar</Link>
      <br />
      <h2>Cadastro de Livro</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome: </label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cidade: </label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Perfil: </label>
          <input
            type="text"
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Receber novidades: </label>
          <input
            type="checkbox"
            name="receberNovidades"
            value={form.receberNovidades}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Observações: </label>
          <input
            type="text"
            name="observacoes"
            value={form.observacoes}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <h3>Dados digitados:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
