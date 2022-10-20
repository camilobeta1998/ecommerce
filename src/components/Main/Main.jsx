import React from 'react'
import Contador from '../Contador/Contador'
import ItemListContainer from '../ItemListContainer'
//el stock en este momento lo puse como 5 pero puedo cambiarlo

const Main = () => {
  return (
    <main>
    <div>
    <ItemListContainer bienvenida="Bienvenidos a todos por medio de un prop" />
    <Contador stock={5}/>
    </div>
    </main>
  )
}

export default Main