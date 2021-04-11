import React, { useState  } from 'react';
import {useMutation} from '@apollo/client/react/hooks';
import {LOGIN_USER} from '../../utils/mutations'
import Auth from '../../utils/Auth'


function Login() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // let [loginUser] = useMutation(LOGIN_USER)

    const login = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!userFormData) {
            console.log('missing email or password')
            return
        }
        try {
            window.location = '/play/';
            // const response = await loginUser({variables: userFormData});
            const response = 'delete this line'

            console.log(response);
            if (response.errors && response.data.login) {
                throw new Error('something went wrong!');
            }
            const { token, user } = response.data.login;
            console.log(user);
            console.log('Successfully Logged In')
            Auth.login(token);
            
        } catch (err) {
            console.log(err);
        }

    }


    return(
        <section>
            <form onSubmit={login} className="login">
                Email: <input type="text" id='emailInput' name='emailInput'
                value={userFormData.email} onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value})}/>
                Password: <input type="password" id='pwInput' name='pwInput'
                value={userFormData.password} onChange={(e) => setUserFormData({...userFormData, password: e.target.value})}/>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}
export default Login;
