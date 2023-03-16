
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Explore } from './Components/Explore/Explore';
import { Plan } from './Components/Plan/Plan';
// import Home from './Components/Home/Home';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/plan' element={<Plan/>}  />
        <Route path='/' element={<Explore/>}   />
      </Routes>
   </Router>
   
   </>
  );
}

export default App;
