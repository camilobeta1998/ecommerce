import React from 'react'
import {useState} from 'react'
const Form = () => {
        //let [name, setName] = useState(' ');
        //let [lastName, setLastName] = useState(' ');
        let [data, setData] =useState({nombre: '' , apellido: ''})
        let enviarDatos = (e) =>{
                e.preventDefault()
                //aqui iria tipo enviar informacion a una base de datos
        }

        //let handleName = (e) =>setName(e.target.value)
        //let handleLastName = (e) =>setLastName(e.target.value)
        let handleChange = (e) =>{
             let {name , value} = e.target;
             setData({...data , [name] : value})
        }
        console.log(data)

  return (
    <div className='contenedor__formulario'>
        <form action="" onSubmit={enviarDatos} className='formulario'>
                <input type="text" placeholder="Nombre" name='nombre' onChange={handleChange} value={data.nombre}/>
                <input type="text" placeholder='Apellido' name='apellido' className='apellido' onChange={handleChange} value={data.apellido}/>
                <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form