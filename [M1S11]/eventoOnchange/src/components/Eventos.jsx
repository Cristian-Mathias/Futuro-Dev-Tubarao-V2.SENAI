import { useState } from "react";

function Eventos() {
    const [input, setInput] = useState('');
    const [lista, setLista] = useState([]);

    const inputChange = (event) => setInput(event.target.value);

    function recuperar(event) {
        event.preventDefault();
        // Verifica se o input está vazio antes de enviar
        if (input.trim() !== '') {
            // Adiciona o valor do input à lista
            setLista([...lista, input]);
            // Limpa o input após recuperar o valor
            setInput('');
        } else {
            alert('Preencha o Campo!');
        }
        console.log(input);
        console.log(lista);

    }

    return (
        <>
            <div className="evento">
                <input className="input" name="name" type="text" value={input} onChange={inputChange} placeholder="Digite sua lista de interesses" />
                <button className="botao" onClick={recuperar}>Adicionar Item</button>
                <div className="lista">
                <ul>
                    {lista.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            </div>
        </>
    );
}

export default Eventos;
