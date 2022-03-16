import React from 'react'
import styles from './assets/css/CardList.css';

const CardList = ({title, cards}) => {
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardList