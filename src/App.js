import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import AllTask from './components/AllTask'

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/"  element={<Login />}/>
        <Route  path="/sign-up"  element={<Signup />}/>
        <Route  path="/tasks"  element={<Signup />}/>
        <Route  path='*'  element={<NotFound />}/>
      </Routes >
    </Router>
  );
}

export default App;
