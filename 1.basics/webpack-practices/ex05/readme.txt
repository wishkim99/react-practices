SASS/SCSS 모듈 번들링하기(SASS: 프로그래밍 요소를 넣음)

1. 설치 패키지
$npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. SASS/SCSS Loader 설정(webpack.config.js)
       module: {
        rules:[{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }]
    }

3. 개발 서버 실행
$npm start