import React, { useState } from 'react'

const Contador = ({stock}) => {
        let [cantidad , setCantidad] = useState(0);

        //Aqui estara la funcion para ir agregando al carrito

        let agregar = () => {
                if (cantidad < stock){
                        setCantidad(cantidad+1);
                }
        }

        //Aqui estara la funcion para ir quitando cosas al carrito

        let quitar = () => {
                if (cantidad > 0){
                        setCantidad(cantidad-1);
                }
        }


  return (
    <div >
        <div className='contenedor_contador'>
                <button onClick={agregar}>+</button>
                <div>
                        <p>{cantidad}</p>
                </div>
                <button onClick={quitar}>-</button>
        </div>
    </div>
  )
}

export default Contador