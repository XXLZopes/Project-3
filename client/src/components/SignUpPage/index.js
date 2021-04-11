import React, { useState } from 'react';
import {useMutation} from '@apollo/client';
import {ADD_USER} from '../../utils/mutations'



function SignUpPage() {
    const [addUser] = useMutation(ADD_USER);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function createUser(e) {
        
        e.preventDefault();
        e.stopPropagation();

        if (!password) {
            window.alert('Please enter a password')
            return
        }
        if (!email) {
            window.alert('Please enter a email')
            return
        }
        if (!username) {
            window.alert('Please enter a username')
            return
        }
        try {
            const response = await addUser({variables: {username: username, email: email, password: password}});
            console.log(response);
            window.location = '/login/';
            console.log(`Welcome ${username}!`)
        } catch (err) {
            console.log(err);
        }

    }

    return(
        <section>
            <form onSubmit={createUser} className="signUp">
                Username: <input type="text" id='usernameInput' name='usernameInput'
                value={username} onChange={(e) => setUsername(e.target.value)}/>
                Email: <input type="text" id='emailInput' name='emailInput'
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                Password: <input type="password" id='pwInput' name='pwInput'
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Create User</button>
            </form>
        </section>
    )
}
export default SignUpPage;
