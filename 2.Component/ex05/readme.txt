ex05: Component-Lifecycle

01. Class Component
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