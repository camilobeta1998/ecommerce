import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import {useState} from 'react'
import { CartContext } from '../../contexto/CartContext'
import {db} from '../../services/firebaseConfig'
const Form = () => {
        //let [name, setName] = useState(' ');
        //let [lastName, setLastName] = useState(' ');
        const [ordenId, setOrdenId] = useState('');
        const {cart , totalPrecio, deleteAll } = useContext(CartContext)
        const totalCarrito = totalPrecio()
        let [data, setData] =useState({nombre: '' , apellido: '' , telefono: '' , direccion: ''});
        let enviarDatos = (e) =>{
                e.preventDefault()
                let name = data.nombre;
                let lastName = data.apellido;
                let telefono = data.telefono;
                let direccion = data.direccion;
                const objOrden = {
                        buyer : {name , lastName , telefono , direccion},
                        items: cart,
                        total: totalCarrito,
                        date: serverTimestamp()
                }
                const orderCollection = collection(db , 'orders')
                addDoc(orderCollection, objOrden)
                .then((res)=>{
                        setOrdenId(res.id)
                        deleteAll()
                })
                .catch((error)=>{
                        console.log('hubo un error' , error)
                })
                
        }

        //let handleName = (e) =>setName(e.target.value)
        //let handleLastName = (e) =>setLastName(e.target.value)
        let handleChange = (e) =>{
             let {name , value} = e.target;
             setData({...data , [name] : value})
        }
        
  if (ordenId){
        return(
                <h1>Gracias por su compra, tu numero de  seguimiento es: {ordenId}</h1>

        );
  }
  return (
    <div className='contenedor__formulario'>
        <form action="" onSubmit={enviarDatos} className='formulario'>
                <input type="text" placeholder="Nombre" name='nombre' onChange={handleChange} value={data.nombre}/>
                <input type="text" placeholder='Apellido' name='apellido'  onChange={handleChange} value={data.apellido}/>
                <input type="text" placeholder='Telefono' name='telefono' onChange={handleChange} value={data.telefono} />
                <input type="text" placeholder='Direccion' name='direccion'  onChange={handleChange} value={data.direccion}/>
                <button >Enviar</button>
        </form>
    </div>
  )
}

export default Form