import logo from './logo.svg';
import './App.css';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import Register from "./components/Register/Register"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Link to ="/dash">Home</Link>
        <Link to ="/register">Register</Link>
        <Link to ="/login">Login</Link>
      </header>

      
      
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
      
        <Route path ="/Login">

        </Route>
      
        <Route path="/:username">

        </Route>

      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
