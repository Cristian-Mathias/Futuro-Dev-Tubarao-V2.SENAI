import { useState, useEffect } from "react";

const requisicaoApi = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release")
            .then((res) => res.json())
            .then((json) => setUser(json));
    }, [])
    return (
        <>
        <div className="card">
            <h2 className="titulo">Notícias IBGE</h2>
            {user && (
                <p className="api">
                    {user.items[0].titulo}
                </p>
            )}
        </div>
        </>
        
    )
}

export default requisicaoApi

//"https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release"