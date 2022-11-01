import React from 'react'
import CardWidget from './CardWidget'

const Navbar = ({isInHeader}) => {
        if (isInHeader){
                return (
                        <nav className='navbar'>
                        <a href="/">Tienda de Ropa</a>
                                <ul>
                                        <li><a href="/category/maletines">Maletines</a></li>
                                        <li><a href="/category/accesorios">Accesorios</a></li>
                                        <li><a href="/category/relojes">Relojes</a></li>
                                </ul>
                                <a href="/cart">
                                        <CardWidget/>
                                </a>
                        </nav>
                )                
        } else {
                return (
                        <nav className='footer'>
                                <ul>
                                        <li>Instagram</li>
                                        <li>Facebook</li>
                                </ul>
                        </nav>
                )   
        }
}

export default Navbar