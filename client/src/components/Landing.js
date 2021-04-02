import React from 'react';

function Landing() {
    return (
        <section>
            <header>
                <img class="img" src="./assets/welcome.gif" width="70%" alt='' />
            </header>
            <br/>
            <div>
                <button class="button img">
                    <img src="./assets/login.png" width="20%" alt='' />
                </button>
            </div>
            <br/>
            <div>
                <button class="button img">
                    <img class="img" src="./assets/signup.png" width="20%" alt='' />
                </button>
            </div>
        </section>
    );
}

export default Landing;