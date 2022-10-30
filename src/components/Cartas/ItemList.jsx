import React from 'react'
import { productos } from '../../mock/productos'
import List from './List'

const ItemList = ({products}) => {
  return (
    <div className='contenedor__tarjetas'>
        {products.map((product)=>{
                return (
                        <div>
                                <List prop={product} key={productos.id}/>
                        </div>
                )
        })}
    </div>
  )
}

export default ItemList