import React from 'react'
import style from './App.module.css';
import Login from './components/login/Login';
import {firestore} from './service/firebase';

function App() {
  return (
    <div className={style.App}>
      <Login/>
    </div>
  );
}

export default App;
