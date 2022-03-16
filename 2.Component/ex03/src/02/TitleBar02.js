import React from 'react'

const TitleBar02 = () => {
  const onClickHandler=e=>{ //render를 부를 때마다 얘를 계속 생성
    console.log('TitleBar02 Clicked!');
  }

  return (
    <h1
        style={{cursor: 'pointer'}}
        onClick={onClickHandler}>
        ex03: Functional Event Handler(Function Component)
    </h1>
  )
}

export default TitleBar02