import React from 'react'
import Contador from '../../Contador/Contador'
import {useContext} from 'react'
import {CartContext} from '../../../contexto/CartContext'
const ItemDetail = ({product}) => { 

        const {AddToCart} = useContext(CartContext)


              //Creare una funcion onAdd que llegara a prop al componente contador
         let onAdd =(cantidad) =>{
                console.log('se agrego al carrito' , cantidad, ' ✅');
                AddToCart(product , cantidad)
        }

            


  return (
    <div className='contenedor__detail__tarjetas' key={product.id}> 
    
        <div>
                <img src={product.img} alt={product.title} />
        </div>
        <div className='contenedor__detail__tarjetas__informacion'>
                <h2>{product.title}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium eligendi, id unde vel 
                iusto esse sed temporibus inventore blanditiis veniam, quam, laboriosam eaque deserunt recusandae dolorum minima libero ipsum quasi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde possimus repellat ut 
                dignissimos pariatur inventore hic, deleniti excepturi corporis explicabo accusamus molestias et aliquam iure in doloremque laboriosam minus!</p>
                <h2 className='contenedor__detail__tarjetas__precio'>Precio {product.price} $</h2>
                 <Contador stock={10} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default ItemDetail