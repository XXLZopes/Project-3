import React from 'react'; 
import Modal from './Nav/index';


function Dashboard() {
    return (
        <section>
            <Modal/>
            <header className="header">   
                <br/>
                <h1>USERNAME</h1>
            </header>  
            <div>
                <h2>last practice:</h2>
                <br/>
                insert graph or some shit here idk
            </div>
            <footer className="footer">
                <h6>made with ❥ by the MYLITICS team</h6>
            </footer>
        </section>
    );
}

export default Dashboard;