import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, setContext } from '@apollo/client';

import './App.css';
import Court from './components/Court'
import Landing from './components/Landing'
import Nav from '../src/components/Nav/index'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import SignUpPage from '../src/components/SignUpPage'
import Auth from './utils/Auth'


// const httpLink = createHttpLink({
//   uri: process.env.GRAPHQL_LINK || "http://localhost:3001/graphql"
// })

// const authLink = setContext((_,{headers}) => {
//   const token = Auth.getToken();
//   return {
//       headers: {...headers,  authorization: token ? `Bearer ${token}` : ''}
//     }
// })

// const client = new ApolloClient({
//   url: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// })

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  
  return (

    <ApolloProvider client={client}>
    <Router basename = '/'>
      <div>
        <Nav />
        <Switch>
        <Route exact path ={["/signup"]} component ={SignUpPage} />
        <Route exact path ={["/"]} component ={Landing} />
        <Route exact path ={["/login"]} component ={LoginPage}/>
        <Route exact path ={["/home"]} component ={Dashboard}/>
        <Route exact path ={['/play']} component ={Court}/>
        </Switch>
        </div>
    </Router>
    </ApolloProvider>

     
  )
}

export default App;
