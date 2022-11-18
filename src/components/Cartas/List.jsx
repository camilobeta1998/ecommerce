import React from 'react'
import {Link} from 'react-router-dom';
const List = (product) => {
          return (
    <div className='tarjetas' key={product.prop.id}>
        
        <img src={product.prop.img} alt="" width='150px'/>
        <article>
                <h2>{product.prop.title}</h2>
                <h4 className='descuento'>%{product.prop.descuento} descuento</h4>
                <h3 className='precio'>$ {product.prop.price} </h3>
        </article>
        <Link to={`/detail/${product.prop.id}`}>Ver mas</Link>
    </div>
  )
}

export default List