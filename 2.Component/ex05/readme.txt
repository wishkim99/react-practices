ex05: Component-Lifecycle

01. Class Component LifeCircle
  1) Lifecycle I: mount
    [1]constructor
    [2]getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다.[react v16.3]
    [3]render
    [4]*ComponentDidMount: 컴포넌트 생성을 마치고 랜더링 작업이 끝난 후,
  
  2) Lifecycle II: update
    [1]getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다.[react v16.3]
    [2]shouldComponentUpdate: props나 state을 변경 했을 때, 리렌더링 여부를 결정한다.
    [3]render  
    [4]getSnapshotBeforeUpdate: 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
    [5]*ComponentDidMount: Dom 업데이트가 끝난 직 후 호출된다. Dom 작업이 가능하다.
 
  3) Lifecycle III: Unmount
    *componentWillUnmount: 컴포넌트를 DOM에서 제거하기 전

  4) 예제
    src/01

02. Alternative(대용): Functional Component:useEffect Hook 사용
  1) Alternative : getDerivedStateFromProps
  2) After Rendering 함수
  3) 어떤 특정 상태의 변화에 대응하는 After Rendering 함수: 관심 분리
  4) Alternative : componentDidMount & componentWillUnmount
  5) 예제
    src/02

03. Clock Component(Class Component LifeCircle 이용)
04. Clock Component(useEffect Hook 이용): src/04 [과제]
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