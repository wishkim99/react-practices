import fs from 'fs';

//readFile은 비동기
let state={ //같은 객체
    order:JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1=state.order;
updateOrder1.receive='부산시 해운대구 우동....';

console.log(state.order, updateOrder1, state.order===updateOrder1);

console.log("=============================================================");
state={
    order:JSON.parse(fs.readFileSync('./json/data.json').toString())
}

//json이랑 updateOrder2의 객체가 다르기 때문에 false
let updateOrder2=Object.assign({}, state.order, {receive: '부산시 해운대구 우동....'}); //같은 property가 있을 경우 변경
console.log(state.order, updateOrder2, state.order===updateOrder2);


console.log("=============================================================");