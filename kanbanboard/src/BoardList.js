import React from 'react'
import BoardListItem from './BoardListItem';

const BoardList = ({boards}) => {
  return (
    <ul>
        {boards.map((board)=><BoardListItem //함수안에서 this는 component의 this가 아님, this.props는 객체
                                    key={board.no}
                                    title={board.name} 
                                    description={board.description}
                                    status={board.status}
                                    tasks={board.tasks}
                                    /> )}
    </ul>
  )
}

export default BoardList