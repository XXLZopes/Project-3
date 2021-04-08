import React,{useState} from 'react';
import './App.css';
import Court from './components/Court'
import Landing from './components/Landing'
import Nav from '../src/components/Nav/index'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import ReactModalLogin from './components/LoginModal/index'
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/react-hooks'
import { setContext } from '@apollo/client/link/context'
import{
  HashRouter as Router,
  Route
} from "react-router-dom";
import Auth from './utils/Auth'
import LoginModal from './components/LoginModal/index';

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_LINK || "http://localhost:3001/graphql"
})

const authLink = setContext((_,{headers}) => {
  const token = Auth.getToken();
  return {
      headers: {...headers,  authorization: token ? `Bearer ${token}` : ''}
    }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  //Use these to change screenHeight for canvas with a window resize event listener
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  
  return (
    <div>
    <ApolloProvider client={client}>
    <Router basename = '/'>
      <Nav />
      <Route exact path ={["/play"]} component ={Landing}/>
      <Route exact path ={["/login"]} component ={LoginPage}/>
      <Route exact path ={["/home"]} component ={Dashboard}/>
      <Route exact path ={["/"]} component ={Court}/>
    </Router>
    </ApolloProvider>
    </div>
    
    

 
  )
}

export default App;
