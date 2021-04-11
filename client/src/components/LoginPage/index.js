import React, { useState } from 'react';
import {useMutation} from '@apollo/client';
import Auth from '../../utils/Auth';
import {LOGIN_USER} from '../../utils/mutations'

function Login() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // const [loginUser, { data }] = useMutation(LOGIN_USER);

    // async function login(e) {
    const login = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!userFormData) {
            console.log('missing email or password')
            return
        }
        // try {
        //     const response = await loginUser({variables: userFormData});
        //     console.log(response);
        //     if (response.errors && response.data.login) {
        //         throw new Error('something went wrong!');
        //     }
        //     const { token, user } = response.data.login;
        //     // console.log(user);
        //     console.log('Successfully Logged In')
        //     Auth.login(token);
        //     window.location = window.location = '/#/play/';
        // } catch (err) {
        //     console.log(err);
        // }

    }

    return(
        <section>
            <form onSubmit={login} className="login">
                Email: <input type="text" id='emailInput' name='emailInput'
                value={userFormData.email} onChange={(e) => login(e.target.value)}/>
                Password: <input type="password" id='pwInput' name='pwInput'
                value={userFormData.password} onChange={(e) => login(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}
export default Login;
