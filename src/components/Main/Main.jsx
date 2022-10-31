import React from 'react'
import ItemListContainer from '../ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
//el stock en este momento lo puse como 5 pero puedo cambiarlo

const Main = () => {

  
  return (
    <main>
    <div className='main__contador'>
    <ItemListContainer bienvenida="Bienvenidos a todos por medio de un prop"/>
    <ItemDetailContainer/> 
    </div>
    </main>
  )
}

export default Main