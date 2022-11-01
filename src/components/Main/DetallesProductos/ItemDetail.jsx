import React from 'react'
import Contador from '../../Contador/Contador'

const ItemDetail = ({product}) => { 
              //Creare una funcion onAdd que llegara a prop al componente contador
         let onAdd =(cantidad) =>{
                console.log('se agrego al carrito' , cantidad, ' ✅');
        }

  return (
    <div key={product.id}> 
    <div>
        <img src={product.img} alt={product.title} width='150px'/>
        <div>
                <h2>{product.title}</h2>
                <h2>Precio {product.price} $</h2>
                 <Contador stock={4} onAdd={onAdd}/>
        </div>
    </div>
    </div>
  )
}

export default ItemDetail