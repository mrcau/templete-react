import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import style from './login.module.css';

const Login = (props) => {
  return (
    <section className={style.login}>
      <Header/>
      <section>
        <h1>Login</h1>
          <div className={style.list}>
            <button className={style.btn}>Google</button>
            <button className={style.btn}>Github</button>
          </div>
      </section>
      <Footer/>
    </section>
  );
}

export default Login;

