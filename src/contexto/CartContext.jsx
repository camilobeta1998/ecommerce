import { createContext, useState} from "react";

export  const CartContext = createContext();

const CartProvider = (props) =>{
        const [cart, setCart] = useState([]);
       
       let AddToCart = (producto , cantidad) =>{
                if (isInCart(producto.id)) {
                        alert('Ya esta en el carrito sumale la cantidad flaco ')
                } else {
                        setCart([...cart , {...producto , cantidad}])
                }
       }

        //funcion para ver si esta en el carrito
       const isInCart = (id) =>{
                return cart.some((prod)=>prod.id===id)
       }

       //funcion para vaciar el carrito

       const deleteAll = () =>{
                setCart([])
       }

 

       console.log(cart)

        return(
                <CartContext.Provider value={{cart , AddToCart, deleteAll}}>
                {props.children}
                </CartContext.Provider>
        );
}

export default CartProvider;