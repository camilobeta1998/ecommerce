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
    <div>
        {
                cart.map((prod)=>(
                        <div key={prod.id}>
                                <img src={prod.img} alt={prod.title} />
                                <div>
                                        <h3>{prod.title}</h3>
                                        <h3>Cantidad : {prod.cantidad}</h3>
                                        <button onClick={()=>deleteOne(prod.id)}>Eliminar</button>
                                </div>
                        </div>
                
                ))
        }
        <h2>Total: {totalPrecio()} $</h2>
        <button onClick={deleteAll}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart