import fs from 'fs';
import update from 'react-addons-update'
//readFile은 비동기
let state={ //같은 객체
    order:JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// let updateOrder=Object.assign({}, state.order, {
//     receive: '부산시 해운대구 우동....'
// }); //같은 property가 있을 경우 변경

let updateOrder=update(state.order, {
    //해당 패스의 값 변경1
    receive: {
        $set: '부산시 해운대구 우동....'
    },

    //해당 패스의 값 변경2
    payment:{
        method:{
            $set:'Mobile'
        }
    },

    products:{
        //배열 요소 변경(인덱스로 찾아서)
        
        //첫번째 놈의 amout 변경
        0:{
            amount:{
                $set:5
            }
        },
        //배열 요소 추가
        $push:[{
            "no": "c002-003",
            "name": "블루dfdf양말",
            "price": 2000,
            "amount": 1
        }]
    }
})

console.log(
    state.order, 
    updateOrder);


