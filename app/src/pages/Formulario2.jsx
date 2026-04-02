import { useState } from "react";
import { Link } from "react-router-dom";

export default function Formulario2() {
    const [livro, setLivro] = useState({
        titulo: '',
        autor: '',
        categoria: '',
        isLivre: false,
        linguagens: []
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setLivro({
            ...livro,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Dados: ", livro);
        setLivro({
            titulo: '',
            autor: '',
            categoria: '',
        })
    };

    function handleCheckBox(event) {
        const { value, checked } = event.target;

        if (checked) {
            setLivro({
                ...livro,
                linguagens: [...livro.linguagens, value]
            });
        } else {
            setLivro({
                ...livro,
                linguagens: livro.linguagens.filter((item) => item !== value)
            });
        }
    }


    return (
        <div>
            <Link to="/">Voltar</Link>
            <h1>Cadastro de livro</h1>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label>Titulo </label>
                    <input
                        placeholder="ex: Pequeno Príncipe"
                        type="text"
                        name="titulo"
                        value={livro.titulo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Autor </label>
                    <input
                        placeholder="ex: Machado de Assis"
                        type="text"
                        name="autor"
                        value={livro.autor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Categoria </label>
                    <input
                        style={{ width: '200px' }}
                        placeholder="ex: frontend, backend, db, mobile"
                        type="text"
                        name="categoria"
                        value={livro.categoria}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Livro disponível para empréstimo? </label>
                    <input
                        type="checkbox"
                        name="isLivre"
                        value={livro.isLivre}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" value="JavaScript" onChange={handleCheckBox} />
                            JavaScript
                        </label>
                        <br />

                        <label>
                            <input type="checkbox" value="Java" onChange={handleCheckBox} />
                            Java
                        </label>
                        <br />

                        <label>
                            <input type="checkbox" value="Python" onChange={handleCheckBox} />
                            Python
                        </label>
                        <br />

                        <label>
                            <input type="checkbox" value="PHP" onChange={handleCheckBox} />
                            PHP
                        </label>
                    </div>

                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
