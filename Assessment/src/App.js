import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Card,Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
     <NavBar/>
        
    
     
      <Router>
<Switch>
          
          <Route path="/login" exact component={Login}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          
          
        </Switch>
        </Router>

     
     
    </div>
  );
}

export default App;
