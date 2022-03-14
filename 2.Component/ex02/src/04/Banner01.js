import React from 'react'
import styles from './assets/css/Banner01.css'; //모듈로 받을 때는 변수(styles) 사용

const Banner01 = () => {
  return (
    <h1 className={styles.Header}>Hello React</h1>
  )
}

export default Banner01