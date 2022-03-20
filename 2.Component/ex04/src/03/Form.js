//제어가 아니기 때문에 state 쓸 필요 없음
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import './assets/Form.css';

export default function Form() {
    const onSubmit=function(e){
        e.preventDefault();

        //validation이 딱히 필요가 없으면
        console.log(e.target.email.value, ':', e.target.password.value);

        //ajax 통신
    }
    return (
        <form id="loginForm" name="loginForm" method="post" onSubmit={onSubmit} action="/do/not/post">
            <label htmlFor="email">이메일</label>
            <input 
                id="email" 
                name="email" 
                type="text" 
            />
            <label htmlFor="password">패스워드</label>
            <input 
                id="password" 
                name="password" 
                type="password" 
            />
            <input type="submit" value="가입" />
        </form>
    );
}