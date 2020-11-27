import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Login = (props) => {
  return (
    <section>
      <Header/>
      <section>
        <h1>Login</h1>
          <div className="authSelect">
            <button>Google</button>
            <button>Github</button>
          </div>
      </section>
      <Footer/>
    </section>
  );
}

export default Login;

