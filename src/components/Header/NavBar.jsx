import React from 'react'
import CardWidget from './CardWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({isInHeader}) => {
        if (isInHeader){
                return (
                        <nav className='navbar'>
                        <Link to="/" className='logo__header'>Tienda de Ropa</Link>
                                <ul>
                                        <li><NavLink to="/category/Maletines">Maletines</NavLink></li>
                                        <li><NavLink to="/category/Accesorios">Accesorios</NavLink></li>
                                        <li><NavLink to="/category/Relojes">Relojes</NavLink></li>
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
                                        <li className='Instagram'>Instagram</li>
                                        <li className='facebook'>Facebook</li>
                                        <li className='whatsapp'>Whatsapp</li>
                                </ul>
                        </nav>
                )   
        }
}

export default Navbar