import React,{useState} from 'react';
import './App.css';
import Court from './components/Court'
import Landing from './components/Landing'
import Nav from '../src/components/Nav/index'
import Dashboard from './components/Dashboard'
import ReactModalLogin from './components/LoginModal/index'
import{
  HashRouter as Router,
  Route
} from "react-router-dom";
import LoginModal from './components/LoginModal/index';

function App() {
  //Use these to change screenHeight for canvas with a window resize event listener
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  return (
    <div>
    <Router basename = '/'>
      <Nav />
      <Route exact path ={["/"]} component ={Landing}/>
      <Route exact path ={["/home"]} component ={Dashboard}/>
      <Route exact path ={["/play"]} component ={Court}/>
    </Router>
    </div>
    
    

 
  )
}

export default App;
