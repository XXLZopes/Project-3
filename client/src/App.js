import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'

function App() {
  return(
  <Router basename = '/'>
    <Route exact path={["/","home"]} component={Landing}/>

  </Router>
  )
}

export default App;
