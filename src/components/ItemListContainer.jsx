import React, { useEffect, useState } from 'react'
import { productos } from '../mock/productos'
import ItemList from './Cartas/ItemList';

const ItemListContainer = (saludo) => {
let [products , setProducts] = useState([]);
        
        useEffect(()=>{
                let promesa = new Promise((resolve, reject)=>{
                        setTimeout(() => {
                               resolve(productos)
                        }, 2000);
                })

                promesa.then((response)=>{
                        setProducts(response);
                }).catch((response)=>{
                        console.log('error');
                })
        }, [])
  return (
    <div>
    <p>{saludo.bienvenida}</p>
    <div>
        <ItemList products={products}/>
    </div>
    </div>
  )
}

export default ItemListContainer