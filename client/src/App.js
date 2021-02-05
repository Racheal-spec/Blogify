import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import create from './Components/Create/Create';
import about from './Components/About/About';
import home from './Components/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Switch>
     <Route path='/' exact component={home} />
     <Route path='/about' component={about} />
     <Route path='/create' component={create} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;