import fs from 'fs';

//readFile은 비동기
let state={ //같은 객체
    order:JSON.parse(fs.readFileSync('./json/data.json').toString())
}


let updateOrder=Object.assign({}, state.order, {
    receive: '부산시 해운대구 우동....'
}); //같은 property가 있을 경우 변경

updateOrder.payment.method='Mobile';
console.log(
    state.order, 
    updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment===updateOrder.payment
    );


