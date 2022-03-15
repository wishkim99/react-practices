import React from 'react'

const BoardListItem = ({title, quantity}) => {
  return (
    <li>{title}: {quantity}</li>
  )
}

export default BoardListItem

