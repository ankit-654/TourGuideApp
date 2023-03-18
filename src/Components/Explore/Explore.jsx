import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExploreIcon from '@mui/icons-material/Explore';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import {  useNavigate } from 'react-router-dom';
import './Explore.css';
import RajasthanCarousel from '../RajasthanCarousel/RajasthanCarousel';
export   const Explore= () =>{
  const [value, setValue] = React.useState(0);
 const navigate=useNavigate();
  return (
    <>  
      
      <div className='head-bg'>
       <div className='heading'>
       <h1>Explore</h1>
       </div>
      <div className='resp-button'>
      <div className='btn-grid'>
        <div>
        <input type="button" value="Hotels" className='input-button'  />
        <input type="button" value="Flights" className='input-button'  />
        <input type="button" value="Restaurants" className='input-button'  />
        <input type="button" value="Things to do" className='input-button'  />
        
        </div>
      </div>
      </div>
      </div>
      
      <div className='trip-advertise'>
       {/* <div className='img-resp'>
        <img className='image' src='/assets/img.png' alt='img'/>
       </div> */}
       <div className='main-container'>
        <div className='guider'>
          <div className='front-side'>
            <h4> A tour guide who knows their stuff can greatly enhance your adventure. ...</h4>
            <input type="button"  value="Tap to see" className='input-button'/>
          </div>
          <div className='back-side'>
          <h3>Its not about the destination ,its about the<span>-  Journey  -</span> </h3>
          <input type="button"  value="Explore" className='input-back-button'/>
          </div>
        </div>
       </div>
      </div>
      
     <div className='demo'>
        <div className='demo2'>
        <h4>Explore "The Pink City" of India</h4>
        <h6>The city is known for its bazaars,<br/> forts, temples, palaces, and <br/>wildlife sanctuaries</h6>
          <img src='/assets/jaipur.jpg' className='div-image' alt="img"/>
          <input type="button" value="Explore" className='explore-button' />
        </div>
     </div>
     
      
      <RajasthanCarousel/>
      
     

     <Box sx={{ bottom:0,left:"0",right:0,position:'fixed'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* <BottomNavigationAction label="Profile" icon={<RestoreIcon />} /> */}
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} onClick={()=> navigate("#")}/>
        <BottomNavigationAction label="Search" icon={<TravelExploreIcon />} onClick={() => navigate("#")}/>
        <BottomNavigationAction label="My Plans" icon={<FavoriteIcon />} onClick={() => navigate("#")}/>
        <BottomNavigationAction label="Account" icon={<SentimentSatisfiedAltIcon />} onClick={() => navigate("#")}/>
      </BottomNavigation>
      
    </Box>
    </>

  );
} 