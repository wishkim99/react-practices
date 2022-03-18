import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import './assets/Form.css';

export default function Form() {
    const[name, setName]=useState(""); //상태
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[validEmail, setValidEmail]=useState(false);
    const[gender, setGender]=useState("female");
    const[birthYear, setBirthYear]=useState('1984'); //선택값 1984로 초기화
    const[description, setDescription]=useState(''); 
    const[agreeProv, setAgreeProv]=useState('no'); //agreeProv가 no가 됨


    //value를 주면 값이 고정됨, onChange는 원래 있는 property
    const onChangeInputName=function(e){
        //e.target이 inputs
        //setName(e.target.value) //이런식으로 할거면(validation을 안할거면) 그냥 비제어가 나음
        //10자 제한
        setName(e.target.value.substr(0,10)); //입력하는대로 바꿔짐
    }

    const onChangeInputEmail=function(e){
        //setName(e.target.value) //이런식으로 할거면 그냥 비제어가 나음
        //10자 제한
        setEmail(e.target.value);

        const re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setValidEmail(re.test(e.target.value));
    }

    const onChangeInputGender = function(e){
        setGender(e.target.value);
    }

    const onChangeAgreeProv=function(e){
      // if(e.target.value==='no'){
      //     setAgreeProv('yes');
      // }
      // if(e.target.value==='yes'){
      //  setAgreeProv('no');
      //  }

        const status=e.target.value==='no'?'yes':'no';

        //API 호출(이런식으로 해야됨)
        const url=`/prov/agree?status=${status}`;
       // result=await fetch(url);
        console.log(url);
        if(true){
            setAgreeProv(status);
        }
    }
    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input 
                id="name" 
                name="name" 
                type="text" 
                value={ name } 
                onChange={onChangeInputName}
                />
      
            <label htmlFor="email">이메일</label>
            <input 
                id="email" 
                name="email" 
                type="text" 
                value={ email }
                onChange={onChangeInputEmail} //onChange에서 value값 변경-> 제어 컴포넌트
            />
        {
            email===''?
                null:
                validEmail ? 
                    <FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:5, fontSize: 16, color: 'blue'}}/> : 
                    <FontAwesomeIcon icon={faTimesCircle} style={{marginLeft:5, fontSize: 16, color: 'red'}}/>
        }
            <label htmlFor="password">패스워드</label>
            <input 
                id="password" 
                name="password" 
                type="password" 
                value={password} 
                onChange={e=>setPassword(e.target.value)}/>

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } defaultChecked={ true }  checked={gender==='female'} onChange={onChangeInputGender}/>
                <label>남</label> <input type="radio" name="gender" value={ "male" } defaultChecked={ false }  checked={gender==='male'} onChange={onChangeInputGender}/>
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" value={birthYear}
            onChange={e=>setBirthYear(e.target.value)}>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={description} onChange={e=>setDescription(e.target.value)} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= {agreeProv} checked={agreeProv==='yes'} onChange={onChangeAgreeProv} />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}