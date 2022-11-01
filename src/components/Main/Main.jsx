import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Cart from '../carrito/Cart'
import ItemListContainer from '../ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
//el stock en este momento lo puse como 5 pero puedo cambiarlo

const Main = () => {

  
  return (
        
    <main>
    <div className='main__contador'>
    <Routes>
            <Route path='/' element={<ItemListContainer bienvenida="Bienvenidos a todos por medio de un prop"/>}/>
            <Route path='/detail' element={<ItemDetailContainer/> } />
            <Route path='/cart' element={<Cart/>}/>
    </Routes>

    </div>
    </main>
  )
}

export default Main