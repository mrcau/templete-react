import React from 'react'
import './App.css';
import Login from './components/login/Login';
import {firestore} from './service/firebase';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
