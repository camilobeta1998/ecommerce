import React from 'react'

const List = (product) => {
  return (
    <div className='tarjetas'>
        <img src={product.prop.img} alt="" width='150px'/>
        <article>
                <h2>{product.prop.title}</h2>
                <h4 className='descuento'>%{product.prop.descuento} descuento</h4>
                <h3>Precio : {product.prop.price} $</h3>
        </article>
    </div>
  )
}

export default List