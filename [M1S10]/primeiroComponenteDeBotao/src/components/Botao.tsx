
import { useState } from 'react'

const Botao = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
        console.log(count)
    }
    return (

        <>
            <div>
                {count}
            </div>
            <button onClick={add}>Adicionar</button>
        </>
    )
}

export default Botao