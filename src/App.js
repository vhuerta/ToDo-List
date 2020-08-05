//
import React, { Fragment, useState, useEffect } from 'react'
import logo from './ico-logo.png'
import recycle from './recycle.svg'
import './App.css'

//* Components
import Input from './components/Input/index'
import List from './components/List/index'

function App() {
  //Checar si hay algo en localStorage
  let initialItems = JSON.parse(localStorage.getItem('items'))
  if (!initialItems) {
    initialItems = []
  }

  // Arreglo de items
  const [items, saveToDo] = useState(initialItems)

  //Checar cuando el statecambia
  useEffect(() => {
    let initialItems = JSON.parse(localStorage.getItem('items'))

    if (initialItems) {
      localStorage.setItem('items', JSON.stringify(items))
    } else {
      localStorage.setItem('items', JSON.stringify([]))
    }
  }, [items])

  // Guarda las tareas y agrega una nueva
  const createToDoItem = item => {
    saveToDo([...items, item])
  }

  //Eliminar una tarea
  const deleteItem = id => {
    const newItems = items.filter(item => item.id !== id)
    saveToDo(newItems)
  }

  //Eliminar todas las tareas
  const deleteAllItems = () => {
    const toResetItems = []
    saveToDo(toResetItems)
  }

  //Verificacion si existen tareas
  const text =
    items.length === 0
      ? "No hay ToDo's, tomate un café!"
      : items.map(item => (
          <List key={item.id} item={item} deleteItem={deleteItem} />
        ))

  //Mostrar
  return (
    <Fragment>
      <header>
        <div id='logoText'>
          <img src={logo} />
          <h1>Frontend Test</h1>
        </div>
      </header>
      <Input createToDoItem={createToDoItem} />
      <div className='list'>
        <div className='byIronBit'>
          <p>ToDo list by Iron Bit</p>
          <img src={recycle} onClick={() => deleteAllItems()}></img>
        </div>
        <div className='itemsList'>
          <p> {text}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default App
