import React from 'react'
import { productos } from '../../mock/productos';
import { useEffect , useState } from 'react'
import ItemDetail from './DetallesProductos/ItemDetail';

const ItemDetailContainer = () => {
        let [product, setProduct] = useState({});

        useEffect(()=>{
                let promise = new Promise((resolve, rejected)=>{

                        let elemento = productos.find((busqueda) =>{
                                return busqueda.id ===1
                        })
                        setTimeout(() => {
                               resolve(elemento) 
                        }, 2000);
                })
                promise.then((resultado)=>{
                        setProduct(resultado)
                }).catch((error)=>{
                        console.log(error)
                })
        } , [])
        console.log(product);
  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer