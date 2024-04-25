import { useState } from "react";

const Events = () => {

    const [estado, setEstado] = useState(0);

    const incrementarContador = () => {
        setEstado(estado + 1)
        console.log(estado)
    }

    const decrementarContador = () => {
        setEstado(estado - 1)
        console.log(estado)
    }

    return (
        <>
            <div className="botao">
                <button onClick={decrementarContador}>-</button>
                {estado}
                <button onClick={incrementarContador}>+</button>
            </div>
        </>
    )
}
export default Events