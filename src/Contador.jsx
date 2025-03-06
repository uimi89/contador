import { useState } from 'react'

export const Contador = ({valor}) => {
    const [contador, setContador] = useState(valor)
    const incrementar = () =>{
        setContador(contador + 1)
    }
    const decremento = () =>{
        setContador(contador - 1)
    }
    const reinicio = () =>{
        setContador(valor)
    }
    return (
        <>
            <h1>Contador</h1>
            <h3>{contador}</h3>
            <hr />
            <div className='buttons'>
                <button className='button_incremento' onClick={incrementar}>
                    Incrementar
                </button>
                <button className='button_decremento' onClick={decremento}>
                    Decremento
                </button>
                <button className='button_reinicio' onClick={reinicio}>
                    Reiniciar
                </button>
            </div>
        </>
    )
}
