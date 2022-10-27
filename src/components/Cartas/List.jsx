import React from 'react'

const List = (product) => {
        console.log(product);
  return (
    <div className='tarjetas'>
        <img src={product.prop.img} alt="" width='200px'/>
        <article>
                <h2>{product.prop.title}</h2>
                <h3>Precio : {product.prop.price} $</h3>
        </article>
    </div>
  )
}

export default List