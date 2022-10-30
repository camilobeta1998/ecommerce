import React, { useState } from 'react'

const Contador = ({stock , onAdd}) => {
        let [cantidad , setCantidad] = useState(0);

        //Aqui estara la funcion para ir agregando al carrito

        let agregar = () => {
                if (cantidad < stock){
                        setCantidad(cantidad+1);
                }
        }

        //Aqui estara la funcion para ir quitando cosas al carrito

        let quitar = () => {
                if (cantidad > 1){
                        setCantidad(cantidad-1);
                }
        }

        let reiniciar = () =>{
                setCantidad(0);
        }


  return (
    <div >
        <div className='contenedor_contador'>
        <div className='contenedor__caja__padre'>
                <div className='contenedor_contador_caja'>
                        <button onClick={agregar}>+</button>
                        <div className='cantidad'>
                                <p>{cantidad}</p>
                        </div>
                        <button onClick={quitar}>-</button>
                </div>
                <div className='contenedor__boton__reiniciar'>
                        <button className='boton__reiniciar'  onClick={reiniciar}>Reiniciar Carrito</button>
                </div>
                <div className='contenedor__boton__agregar'>
                        <button className='boton__agregar' onClick={()=>onAdd(cantidad)}>Agregar Carrito</button>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Contador