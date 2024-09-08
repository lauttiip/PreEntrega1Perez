import React from 'react'
import "./ItemListContainer.css"
function ItemsListContainer({greeting}) {
  return (
    <div className='bienvenida'>
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemsListContainer