import React from 'react';
import LoginModal from './LoginModal';
import Modal from '../components/Nav/landingNav';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from './../utils/mutations';
import Auth from '../utils/Auth';

function Landing() {
    return (
        <section>
            <Modal/>
            <header>
                <img className="img" src="./assets/welcome.gif" width="70%" alt='' />
            </header>
            <br />
            <div>
                <button onClick={console.log(Login())} className="button img">
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
            <footer className="footer">
                <h6>made with ❥ by the MYLITICS team</h6>
            </footer>
        </section>
    );
}

function Login() {
    console.log('login')
    const [loginUser] = useMutation(LOGIN_USER)
    const robertInfo = {
        email: "robert@test.com",
        password: "password"
    };
    try {
        const response = loginUser({variables: {robertInfo} });
        setTimeout (function() {
            if (!response.ok) {
                throw new Error('something went wrong!');
            }
        }, 3000);

        console.log(response);
        console.log(robertInfo);


        const { token, user } = response.json();
        console.log(user);
        Auth.login(token);
    } catch (err) {
        console.log(err);
        // setShowAlert(alert)
    }
    return LoginModal;
}

function SignUp() {
    console.log('sign up')
}
export default Landing;