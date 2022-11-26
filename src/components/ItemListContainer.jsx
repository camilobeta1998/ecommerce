import React, { useEffect, useState } from 'react'
//import { productos } from '../mock/productos'
import ItemList from './Cartas/ItemList';             
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import { getDocs, /*query, where*/ } from 'firebase/firestore';
import {  collectionProd} from '../services/firebaseConfig';
const ItemListContainer = () => {
 let [loading, setLoading] = useState(true)
 let [products , setProducts] = useState([]);
 let {categoryName} = useParams(); 
        useEffect(()=>{

                
               // const q = query(collectionProd , where('category' , '==' , categoryName ))
                getDocs(collectionProd)
                .then((res)=>{
                        const products =res.docs.map((prod)=>{
                                return{
                                        id : prod.id,
                                        ...prod.data()
                                }
                        })
                        setProducts(products)
                })
                .catch((error)=>{
                        console.log(error)
                })
                .finally(()=>{
                        setLoading(false)
                })
                /* if(categoryName===undefined){
                        let promesa = new Promise((resolve, reject)=>{
                                setTimeout(() => {
                                resolve(productos)
                                }, 2000);
                        })
                        promesa.then((response)=>{
                                setProducts(response);
                        }).catch((error)=>{
                                console.log(error);
                        }).finally(()=>{
                                setLoading(false)
                        })
                } else {
                         let promesa = new Promise((resolve, reject)=>{
                                setTimeout(() => {
                                resolve(productos)
                                }, 2000);
                        })
                        promesa.then((response)=>{

                                let productosFiltrados = response.filter((prod)=>{
                                        return prod.category === categoryName;
                                })
                                setProducts(productosFiltrados);
                        }).catch((error)=>{
                                console.log(error);
                        }).finally(()=>{
                                setLoading(false)
                        })
                } */

                return setLoading(true)
        }, [categoryName])
  if(loading===true){
        return(
        <div className='contenedor__carga'>
                <PulseLoader size={30}/>
        </div>  
        )
  }
  return (
    <div>
    <div>
        <ItemList products={products}/>
    </div>
    </div>
  )
}

export default ItemListContainer