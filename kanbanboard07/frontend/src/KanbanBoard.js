import React from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbaBoard.css';

const KanbanBoard = ({cards}) => {
  // console.log([0, 1, 2, 3, 4].filter(e => e % 2 === 0));
  console.log("kanbanBoard");
  console.log(cards);
  return (
    <div className={styles.KanbanBoard}>
      <CardList title={'ToDo'} cards={cards.filter(e => e.status === 'ToDo')} />
      <CardList title={'Doing'} cards={cards.filter(e => e.status === 'Doing')} />
      <CardList title={'Done'} cards={cards.filter(e => e.status === 'Done')} />
    </div>
  )
}

export default KanbanBoard;