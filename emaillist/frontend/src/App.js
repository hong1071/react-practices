import React, {useEffect, useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

import './assets/scss/App.scss';
// import data from './assets/json/data.json';

export default function() {
    const[emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (keyword) => {
      setKeyword(keyword);
    };
    
    useEffect(async () => {
      try{
        const response = await fetch('http://localhost:8888/api', {
          method: 'get',
          mode: 'cors',                                   // no-cors, cors, same_origin
          credentials: 'include',                          // include(서버 쪽에 관련 세팅해야 함), omit(응답에다 cookie를 담아 전송하지 못함, 쓰면 안됨), same-origin
          cache: 'no-cache',                              // no-cache, reload, force-cache, default
          headers: {
            'Content-Type': 'application/json',           // cf.application/x-www-form-urlencoded
            'Accept': 'application/json'                  // cf. text/html
          },
          redirect: 'follow',                             // follow, error, manual
          referrer: 'client',                             // no-referrer, client
          body: null
        });

        if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const jsonResult = await response.json();

        if(jsonResult.result !== 'success'){
          throw new Error(`${jsonResult.result} ${jsonResult.message}`);
        }

        setEmails(jsonResult.data);

      } catch(e){
        console.e;
      }
      
    }, []);

    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
          <Emaillist keyword={keyword} emails={emails} />  
        </div>
    )
}