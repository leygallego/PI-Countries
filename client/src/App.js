import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Landing from './components/Landing';
import Detalle from './components/Detalle';
import Crear from './components/Crear';
import Busqueda from './components/Busqueda';
import { useDispatch } from 'react-redux';
import { dbCountriesGet, getActivities } from './actions';




function App() {

    const dispatch = useDispatch();

    dispatch(dbCountriesGet());
    dispatch(getActivities());


  return (
    <div className="App">

      <Router>
      <Route  path="/" component={NavBar}></Route>
      <Route exact path="/" component={Landing}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/detalle/:id" render={({ match }) => <Detalle id={match.params.id}/>} ></Route>
      <Route exact path="/crear" component={Crear}></Route>
      <Route exact path="/country" component={Busqueda}></Route>






      </Router>
    </div>
  );
}

export default App;
