import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import ProtectedRoute from './routes/ProtectedRoute'
import AllTask from './components/AllTask'

function App() {
  return (
    <Router>
      <Routes >
        <Route  path="/sign-in"  element={<Login />}/>
        <Route  path="/sign-up"  element={<Signup />}/>
        <Route exact path='/tasks' element={<ProtectedRoute/>}>
            <Route exact path='/tasks' element={<AllTask/>}/>
        </Route>
        <Route  path='*'  element={<NotFound />}/>
      </Routes >
    </Router>
  );
}

export default App;
