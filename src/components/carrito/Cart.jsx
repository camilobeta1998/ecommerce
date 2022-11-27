import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexto/CartContext'

const Cart = () => {
        const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext)

        if (cart.length === 0 ){
                return(
                        <h1>Aún no hay productos en el carrito, vuelve al <Link to='/'>Home</Link></h1>
                )
        }
  return (
    <div className='contenedor__carrito__mayor'>
        {
                cart.map((prod)=>(
                        <div key={prod.id} className='contenedor__carrito'>
                                <div className='contenedor__carrito__imagen'>
                                        <img src={prod.img} alt={prod.title} className='contenedor__carrito__imagen'/>
                                </div>
                                        <div>
                                                <h3>{prod.title}</h3>
                                                <h3>Cantidad : {prod.cantidad}</h3>
                                                <h2>Total: {totalPrecio()} $</h2>
                                                <div className='contenedor__carrito__botones'>
                                                        <button onClick={deleteAll}>Vaciar Carrito</button>
                                                        <button onClick={()=>deleteOne(prod.id)}>Eliminar</button>
                                                        <Link to='/checkout' className='checkout'>Checkout</Link>
                                                </div>
                                        </div>
                        </div>
                
                ))
        }
    </div>
  )
}

export default Cart