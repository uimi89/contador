import { useState } from 'react'

export const Contador = ({valor}) => {
    const [contador, setContador] = useState(valor)
    const incrementar = () =>{
        setContador(contador + 1)
    }
    const reinicio = () =>{
        setContador(valor)
    }
    const handleClick = () => {
        if (contador > valor) {
            setContador(contador - 1)
        } else {
            alert("No es posible decrementar a números negativos");
        }
    };
    return (
        <>
            <h1>Contador</h1>
            <h3>{contador}</h3>
            <hr />
            <div className='buttons'>
                <button className='button_incremento' onClick={incrementar}>
                    Incrementar
                </button>
                <button className='button_decremento' onClick={handleClick}>
                    Decremento
                </button>
                <button className='button_reinicio' onClick={reinicio}>
                    Reiniciar
                </button>
            </div>
        </>
    )
}
