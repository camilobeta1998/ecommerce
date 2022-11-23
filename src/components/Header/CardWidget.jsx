import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexto/CartContext'

const CardWidget = () => {
        const {totalUnidades } = useContext(CartContext)
  return (
        <div className="carrito_de_compras">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span>{totalUnidades()}</span>
        </div>
  )
}

export default CardWidget