import React from 'react';
import './App.css';
import Court from './components/Court'
// import Dropdown from './components/Dropdown';
// import Landing from './components/Landing'
import Nav from './components/Nav';

function App() {
//   //Use these to change screenHeight for canvas with a window resize event listener
//   const [screenHeight, setScreenHeight] = useState(window.innerHeight);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  return (
    <div className="background">
      <Nav></Nav>
      {/* <Dropdown />
      <Court></Court> */}
      {/* <Landing></Landing> */}

    </div>

  // <Router basename = '/'>
  //   <Route exact path={["/","home"]} component={Landing}/>

  // </Router>
  )
};


export default App;
