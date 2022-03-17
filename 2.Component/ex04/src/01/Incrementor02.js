import React, {useState} from 'react';

export default function ({ begin, step }) { //begin이랑 step은 property
    const[val, setVal]=useState(begin); //useState에서 setVal이라는 함수를 만듦, setVal은 함수객체를 만듦(setter)

    const {a}={a:10, b:20};
    const [b,c]=[1,2,3,4]
    
    return (
        <div>
            <button onClick={e=>setVal(val+step)}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{val}</span>
        </div>
    );
}