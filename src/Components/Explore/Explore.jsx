import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExploreIcon from '@mui/icons-material/Explore';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';
import './Explore.css';

export   const Explore= () =>{
  const [value, setValue] = React.useState(0);
 const navigate=useNavigate();
  return (
    <>  
      
      <div>
       <div>
       <h1>Explore</h1>
       </div>
      <div className='btn-grid'>
      <div className='btn-resp'>
        <div>
        <input type="button" value="Things to do" className='input-button'  />
        <input type="button" value="Things to do" className='input-button'  />
        <input type="button" value="Things to do" className='input-button'  />
        <input type="button" value="Things to do" className='input-button'  />
        </div>
       </div>
      </div>
      </div>



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