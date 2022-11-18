import { createContext, useState} from "react";

export  const CartContext = createContext();

const CartProvider = (props) =>{
        const [cart, setCart] = useState([]);
       
       let AddToCart = (producto , cantidad) =>{
                setCart([...cart , {...producto , cantidad}])
       }

       console.log(cart)

        return(
                <CartContext.Provider value={{cart , AddToCart}}>
                {props.children}
                </CartContext.Provider>
        );
}

export default CartProvider;