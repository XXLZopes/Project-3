import React,{useState} from 'react';
import './App.css';
import Court from './components/Court'

function App() {
  //Use these to change screenHeight for canvas with a window resize event listener
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  return (
    <div className="background">
      <Court></Court>
    </div>
  // <Router basename = '/'>
  //   <Route exact path={["/","home"]} component={Landing}/>

  // </Router>
  )
}

export default App;
