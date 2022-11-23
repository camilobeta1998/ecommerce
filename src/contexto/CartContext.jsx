import { createContext, useState} from "react";

export  const CartContext = createContext();

const CartProvider = (props) =>{
        const [cart, setCart] = useState([]);
       
       let AddToCart = (producto , cantidad) =>{
                if (isInCart(producto.id)) {
                        sumarCantidad(producto,cantidad)
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

       //funcion para eliminar solo un elemento

       const deleteOne = (id) =>{
                const prodFiltrados = cart.filter((prod)=>prod.id !== id)
                setCart(prodFiltrados)
       }
       

       //funcion para sumar la cantidad de un mismo producto

       const sumarCantidad = (productoPorAgregar , cantidad) =>{
                const cartActualizado = cart.map((prod)=>{
                        if (productoPorAgregar.id===prod.id){
                                const productoActualizado = {
                                        title : prod.title,
                                        descuento : prod.descuento,
                                        stock: prod.stock,
                                        price: prod.price,
                                        img : prod.img,
                                        id: prod.id,
                                        category : prod.category,
                                        cantidad: prod.cantidad + cantidad
                                }
                                return productoActualizado
                        } else {
                                return prod
                        }
                })

                setCart(cartActualizado)
       }

       //funcion  para sumar unidades totales del carrito

       const totalUnidades = () =>{
                let count = 0;
                const copia = [...cart]
                copia.forEach((prod)=>{
                        count = count + prod.cantidad
                })
                return count
       }

       //Funcion total precio

       const totalPrecio = () =>{
                return 1000
       }

 

       console.log(cart)

        return(
                <CartContext.Provider value={{cart , AddToCart, deleteAll , deleteOne , totalUnidades , totalPrecio}}>
                {props.children}
                </CartContext.Provider>
        );
}

export default CartProvider;