import React, { useEffect, useState } from 'react'
import { productos } from '../mock/productos'
import ItemList from './Cartas/ItemList';             
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
 

let [products , setProducts] = useState([]);
 let {categoryName} = useParams(); 
        useEffect(()=>{
                if(categoryName===undefined){
                        let promesa = new Promise((resolve, reject)=>{
                                setTimeout(() => {
                                resolve(productos)
                                }, 2000);
                        })
                        promesa.then((response)=>{
                                setProducts(response);
                        }).catch((error)=>{
                                console.log(error);
                        })
                } else {
                         let promesa = new Promise((resolve, reject)=>{
                                setTimeout(() => {
                                resolve(productos)
                                }, 2000);
                        })
                        promesa.then((response)=>{

                                let productosFiltrados = response.filter((prod)=>{
                                        return prod.category ===categoryName;
                                })
                                setProducts(productosFiltrados);
                        }).catch((error)=>{
                                console.log(error);
                        })
                }
        }, [categoryName])

  return (
    <div>
    <div>
        <ItemList products={products}/>
    </div>
    </div>
  )
}

export default ItemListContainer