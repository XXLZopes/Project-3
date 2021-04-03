import React from 'react';

function Landing() {
    return (
        <section>
            <header>
                <img class="img" src="./assets/welcome.gif" width="70%" alt='' />
            </header>
            <br/>
            <div>
                <button onClick={Login} class="button img">
                    <img src="./assets/login.png" width="40%" alt='' />
                </button>
            </div>
            <br/>
            <div>
                <button onClick={SignUp}class="button img">
                    <img class="img" src="./assets/signup.png" width="40%" alt='' />
                </button>
            </div>
            <div id="loginModal" class="modal">
                <h1>login in below</h1>
            </div>
        </section>
    );
}

function Login() {
    console.log('login')
}

function SignUp() {
    console.log('sign up')
}
export default Landing;