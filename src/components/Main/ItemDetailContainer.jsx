import React from 'react'
import { productos } from '../../mock/productos';
import { useEffect , useState } from 'react'
import ItemDetail from './DetallesProductos/ItemDetail';
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
        let [product, setProduct] = useState({}); 
        let {idProd} = useParams();

        useEffect(()=>{
                let promise = new Promise((resolve, rejected)=>{

                        setTimeout(() => {
                               resolve(productos) 
                        }, 2000);
                })
                promise.then((resultado)=>{
                        let objeto_find = resultado.find((obj)=>{
                                return obj.id ===parseInt(idProd)
                        })
                        setProduct(objeto_find)
                }).catch((error)=>{
                        console.log(error)
                })
        } , [idProd])
  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer