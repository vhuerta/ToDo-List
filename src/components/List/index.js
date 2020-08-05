import React from 'react'
import remove from '../../remove.svg'
import './style.css'

const List = ({ item, deleteItem }) => {
  const { toDoItem, id } = item
  return (
    <div className='toDolist-item'>
      <p>{toDoItem}</p>
      <img src={remove} alt='' onClick={() => deleteItem(id)} />
    </div>
  )
}

export default List
