//블록 스코프 변수(es6)
var users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; //객체분해(es6)
// function print(o){
//     //템플릿 문자열(es6)
//     console.log(o.no+", "+o.name + ", "+o.email);
// }
//객체분해(es6

function print({
  no,
  name,
  email
}) {
  //템플릿 문자열(es6)
  console.log(`${o.no}, ${o.name}, ${o.email}`); //템플릿 문자열(달러를 놓고 바꿔야할 부분을 변수로 사용하여 바꿈)
} //for..of(es6)


for (var user of users) {
  print(user);
}
