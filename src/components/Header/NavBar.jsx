import React from 'react'
import CardWidget from './CardWidget'

const Navbar = ({isInHeader}) => {
        if (isInHeader){
                return (
                        <nav className='navbar'>
                        <h1>Comisión 45060</h1>
                                <ul>
                                        <li>Nosotros</li>
                                        <li>Contacto</li>
                                </ul>
                                <CardWidget/>
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