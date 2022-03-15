import React from 'react'
import BoardList from './BoardList';
import css from './public/styles.css'

const App = () => {
 let boards=require("../public/data.json")

  return (
    <div id="KanbanBoard">
      <BoardList boards={css.boards}/>
    </div>
  )
}

export default App

