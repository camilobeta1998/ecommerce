import React from 'react'
import Contador from '../Contador/Contador'
import ItemListContainer from '../ItemListContainer'
//el stock en este momento lo puse como 5 pero puedo cambiarlo

const Main = () => {

        //Creare una funcion onAdd que llegara a prop al componente contador
         let onAdd =(cantidad) =>{
                console.log('se agrego al carrito' , cantidad, ' ✅');
        }
  return (
    <main>
    <div className='main__contador'>
    <ItemListContainer bienvenida="Bienvenidos a todos por medio de un prop"/>
    <Contador stock={5} onAdd={onAdd}/>
    </div>
    </main>
  )
}

export default Main