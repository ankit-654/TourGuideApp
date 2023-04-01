
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Account from './Components/Account/Account';
import { Explore } from './Components/Explore/Explore';
import Login from './Components/Login/Login';
import { MyPlan } from './Components/Plan/MyPlan';
import Profile from './Components/Profile/Profile';
// import Demo from './Components/ViewExploreComponent/ExploreView';
import ExploreView from './Components/ViewExploreComponent/ExploreViewCard';
import MainPage from './MainPage';
// import Home from './Components/Home/Home';

function App() {
  return (
   <>
    
        <Router>
          <Routes>
          {/* Simple routing */}
          <Route path='/' element={<Login/>} />
            {/* <Route path='/' element={<Explore/>}/> */}
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/plan' element={<MyPlan/>}  />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/view' element={<ExploreView/>} />
           
           {/* Parent child routing  */}
            {/* <Route path='/' element={<MainPage/>}>
            <Route path='explore' element={<Explore/>}>
            <Route path='view' element={<ExploreView/>} />
            </Route>
            <Route path='plan' element={<MyPlan/>}  />
            <Route path='profile' element={<Profile/>}/>
            </Route> */}
            
            {/* <Route  path='/demo' element={<Demo/>} /> */}
          </Routes>
      </Router>
    
   </>
  );
}

export default App;
