//
import React, { useState } from 'react'
import './style.css'

const Formulario = ({ createToDoItem }) => {
  //State toDOItem
  const [item, updateItem] = useState({
    toDoItem: '',
  })

  //State error true|false
  const [error, updateError] = useState(false)

  //Modificando state
  const updateState = event => {
    updateItem({
      ...item,
      [event.target.name]: event.target.value,
    })
    console.log('escribiendo')
  }

  //Funcion de evento
  const submitItem = event => {
    event.preventDefault()
    //Validando contenido y actualizando state de error
    if (item.toDoItem.trim() === '') {
      updateError(true)
      return
    }

    updateError(false)
    item.id = Date.now()
    createToDoItem(item)
    //Limpiando input
    updateItem({
      toDoItem: '',
    })
  }

  return (
    <>
      {error ? <p className='alerta-error'>Ingresa una tarea</p> : null}
      <form className='submitText' onSubmit={submitItem}>
        <input
          type='text'
          name='toDoItem'
          placeholder='Agrega una nueva tarea'
          onChange={updateState}
          value={item.toDoItem}
        />
        <button type='submit'>Agregar</button>
      </form>
    </>
  )
}

export default Formulario
