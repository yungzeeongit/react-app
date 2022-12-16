import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
  <Navbar />
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/Projects' element={<Projects />}></Route>
<Route  path='/project/:id' element={<ProjectDisplay />}/>
<Route path='/Experience' element={<Experience />}/>
</Routes>
<Footer />
      </Router>
    </div>
  );
}

export default App;
