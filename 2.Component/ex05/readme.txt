ex05: Component-Lifecycle

01. Class Component LifeCircle
  1) Lifecycle I: mount
    constructor
    getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다.[react v16.3]
    render
    *ComponentDidMount: 컴포넌트 생성을 마치고 랜더링 작업이 끝난 후,
  2) Lifecycle II: update
    getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다.[react v16.3]
    shouldComponentUpdate: props나 state을 변경 했을 때, 리렌더링 여부를 결정한다.
    render  
      *ComponentDidMount: Dom 업데이트가 끝난 직 후 호출된다. Dom 작업이 가능하다.
  3) Lifecycle III: Unmount
    componentWillUnmount: 컴포넌트를 DOM에서 제거하기 전
02. Alternative(대용): Functional Component:useEffect Hook

1. 설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types

2. 설정
 config/babel.config.json 
 config/webpack.config.js 

3. npm 스크립팅
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },

4. 실행
$ npm run debug src={01|02|03|04|...} 


===================================
제어문-알고리즘, 비즈니스, 로직 => 제어문은 표현식이 아님!

컴포넌트 작성(프로퍼티), 상태/이벤트, 라이프사이클 함수, ajax, 라우팅