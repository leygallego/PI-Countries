import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">

      <Router>
      <Route  path="/" component={NavBar}></Route>
      <Route exact path="/" component={Landing}></Route>
      <Route exact path="/home" component={Home}></Route>

      {/* <Route exact path="/crear" component={Crear}></Route>

      <Route exact path="/detalle/:id" component={Detalle}></Route> */}




      </Router>
    </div>
  );
}

export default App;
