import React,{useState} from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/react-hooks'
import './App.css';
import Court from './components/Court'
import Landing from './components/Landing'
import Nav from '../src/components/Nav/index'

const client = new ApolloClient({
  uri: '/graphql',
  cache: 'App.js line 10 catch'
})

function App() {
  //Use these to change screenHeight for canvas with a window resize event listener
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  return (
    <ApolloProvider client={client}>
    <div className="background">
      <Nav />
      <Court></Court>
      {/* <Landing></Landing> */}

    </div>

  {/* <Router basename = '/'>
  <Route exact path={["/","home"]} component={Landing}/>

  </Router> */}
  </ApolloProvider>
  )
}

export default App;
