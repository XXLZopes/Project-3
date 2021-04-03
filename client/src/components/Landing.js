import React from 'react';
import LoginModal from './LoginModal';

function Landing() {
    return (
        <section>
            <header>
                <img className="img" src="./assets/welcome.gif" width="70%" alt='' />
            </header>
            <br />
            <div>
                <button onClick={Login} className="button img">
                    <img src="./assets/login.png" width="40%" alt='' />
                </button>
            </div>
            <br />
            <div>
                <button onClick={SignUp} className="button img">
                    <img className="img" src="./assets/signup.png" width="40%" alt='' />
                </button>
            </div>
            <div id="loginModal" className="modal">
                <h1>login in below</h1>
            </div>
        </section>
    );
}

function Login() {
    console.log('login')
    return LoginModal;
}

function SignUp() {
    console.log('sign up')
}
export default Landing;