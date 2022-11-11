import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Cart from '../carrito/Cart'
import ItemListContainer from '../ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Form from '../Form/Form'
const Main = () => {

  
  return (
        
    <main>
    <div className='main__contador'>
    <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/detail/:idProd' element={<ItemDetailContainer/> } />
            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Form/>}/>
    </Routes>

    </div>
    </main>
  )
}

export default Main