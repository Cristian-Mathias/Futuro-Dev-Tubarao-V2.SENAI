import React, { useState, useEffect } from "react";

const Form = () => {
    // Estado no formato de objeto
    const [form, setForm] = useState({
        nome: '',
        email: '',
        idade: ''
    });

    // Estado para armazenar a lista de itens do formulário
    const [formList, setFormList] = useState([])

    // Estado para validação dos campos preenchidos
    const [filledValue, setFilledValue] = useState(true);

    // Estado para validar se todos os campos estão preenchidos
    const [validateField, setValidateField] = useState(true);

    // Função para lidar com a mudança nos campos de entrada
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    // Adicionar o item do formulário a lista
    const addItemList = () => {
        setFormList([...formList, form])
    }

    // Efeito para validar se todos os campos estão preenchidos
    useEffect(() => {
        const isValidateField = Object.values(form).every(value => value.trim() !== '');
        setValidateField(isValidateField);
        // Verifica se todos os campos do formulário foram preenchidos
        const filledFieldsCount = Object.values(form).reduce((accumulator, currentValue) => currentValue.trim() !== '' ? accumulator + 1 : accumulator, 0);
        setFilledValue(filledFieldsCount === 3);
    }, [form]);

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        // Verifica se algum campo está vazio
        const filledValues = Object.values(form).some(value => value.trim() === '');
        setFilledValue(filledValues);
        if(!filledValues){
            addItemList()
            //Limpa os campos após adicionar a lista do formulário
            setForm({nome:'',email:'',idade:''})
        }
        console.log(form);
    };

    return (
        <>
            <div className="form-input">
                
                {validateField && (
                    <div className="alertCampos">
                        <p>Todos os campos foram preenchidos!</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label className="label">Email:</label>
                        <input 
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label className="label">Idade:</label>
                        <input
                            type="number"
                            name="idade"
                            value={form.idade}
                            onChange={handleChange} />
                    </div>
                    <button
                        type="submit"
                        className="botao"
                        disabled={!validateField} // Desativa o botão se algum campo estiver vazio
                    >Enviar</button>
                </form>
                {filledValue && (
                    <div className="alert">
                        <ul>
                            {form.nome !== '' && <li><span className="emptyText">Campo Nome Preenchido!</span></li>}
                            {form.email !== '' && <li><span className="emptyText">Campo Email Preenchido!</span></li>}
                            {form.idade !== '' && <li><span className="emptyText">Campo Idade Preenchido!</span></li>}
                        </ul>
                       
                    </div>
                )}
                <div className="formList">
                <h3>Lista de Itens do Formulário:</h3>
                <ul>
                    {formList.map((item, index) => (
                        <li key={index}>
                            <span>Nome: {item.nome}</span>
                            <span>Email: {item.email}</span>
                            <span>Idade: {item.idade}</span>
                        </li>
                    ))}
                </ul>
            </div>
                
            </div>
        </>
    );
};

export default Form;
