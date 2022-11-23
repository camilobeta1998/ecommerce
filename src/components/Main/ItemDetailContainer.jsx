import React from 'react'
import { productos } from '../../mock/productos';
import { useEffect , useState } from 'react'
import ItemDetail from './DetallesProductos/ItemDetail';
import {useParams} from 'react-router-dom'
import PulseLoader from "react-spinners/PulseLoader";



const ItemDetailContainer = () => {
        let [product, setProduct] = useState({}); 
        let [loading, setLoading] = useState(true);
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
                }).finally(()=>{  //Cuando la promesa finalice el estado setLoading quedara de nuevo false, el finally siempre se va a ejecutar
                        setLoading(false)
                })
        } , [idProd])

        if (loading===true) {
                return (
                        <div className='contenedor__carga'>
                                <PulseLoader size={30}/>
                        </div>
                )
        }
  return (
    <div>
         <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer