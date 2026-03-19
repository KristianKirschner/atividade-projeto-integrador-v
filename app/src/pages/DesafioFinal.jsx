
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DesafioFinal() {

    const [tarefas, setTarefas] = useState(['Estudar React', 'Fazer exercício']);
    const [novaTarefa, setNovaTarefa] = useState('');

    const handleInput = (e) => {
        setNovaTarefa(e.target.value)
    };

    const adicionar = () => {
        setTarefas([...tarefas, novaTarefa]);
    }

    const remover = (index) => {
        const tarefasAtualizadas = tarefas.filter((_, i) => i !== index);
        setTarefas(tarefasAtualizadas);
    };

    return (
        <div>
            <Link to="/">Voltar</Link>
            <br />

            <input value={novaTarefa} type='text' onChange={handleInput} placeholder="Digite a tarefa:" />
            <button onClick={adicionar}>Adicionar</button>

            <h2>Lista de tarefas: </h2>
            <h3>Você tem {tarefas.length} tarefas cadastradas</h3>
            {
                tarefas.map((tarefa, index) =>
                    <div>
                        <li key={index}>{tarefa} <button onClick={() => remover(index)}>Remover</button></li>
                    </div>
                        )
                
            }


                    </div>
                );
}
