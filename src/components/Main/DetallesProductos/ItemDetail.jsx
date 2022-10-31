import React from 'react'
import Contador from '../../Contador/Contador'


const ItemDetail = ({product}) => {
        console.log(product);
              //Creare una funcion onAdd que llegara a prop al componente contador
         let onAdd =(cantidad) =>{
                console.log('se agrego al carrito' , cantidad, ' ✅');
        }
  return (
    <div className='contenedor__item__detail' key={product.id}> 
    <div className='contenedor__item__detail__tarjeta'>
        <img src={product.img} alt={product.title} className='imagen__item__detail' />
        <div className='contenedor__item__detail__texto'>
                <h2>{product.title}</h2>
                <h2>Precio {product.price} $</h2>
                 <Contador stock={4} onAdd={onAdd}/>
        </div>
    </div>
    </div>
  )
}

export default ItemDetail