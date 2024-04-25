import { useState } from "react"

const  Controlado = () => {

    const [valor, setValor] = useState('')

    return(
        <>
            <div className="cadastro">
                <form>
                    <label className="labelCadastro">Cadastro</label>
                    <input className="inputCadastro" type="text" onChange={(event)=>{
                        setValor(event.target.value.toUpperCase())
                    }} />
                    <div className="recebeInput">
                        {valor}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Controlado