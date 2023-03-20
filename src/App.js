
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './Components/Account/Account';
import { Explore } from './Components/Explore/Explore';
import { Plan } from './Components/Plan/Plan';
import MainPage from './MainPage';
// import Home from './Components/Home/Home';

function App() {
  return (
   <>
    
    <div>
    <Router>
      <Routes>
        
        <Route path='/' element={<MainPage/>}>
        <Route path='explore' element={<Explore/>}/>
        <Route path='plan' element={<Plan/>}  />
        <Route path='account' element={<Account/>}/>
        </Route>
      </Routes>
   </Router>
    </div>
   
   </>
  );
}

export default App;
