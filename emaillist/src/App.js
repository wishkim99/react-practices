import React, {useState} from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';


const App = () => {
  const [emails, setEmails] = useState(data);
  const [keyword, setKeyword] = useState('');

  const notifyKeywordChange = function(keyword) {
    //원본 data 가지고 상태를 변화시킴
    //두개가 다 변한다음에 한번 변하지 않음
    setEmails(data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1));
  }

  return (
    <div className={'App'}>
      <RegisterForm />
      <SearchBar callback={notifyKeywordChange}/>
      <Emaillist emails={emails} />
    </div>
  )
}

export default App
