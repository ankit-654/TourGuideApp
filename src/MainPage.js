import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExploreIcon from '@mui/icons-material/Explore';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Outlet, useNavigate } from 'react-router-dom';
export default function MainPage(){
    const [value, setValue] = React.useState(0);
    const navigate=useNavigate();
    return(
        <>
       
        <Outlet/>
        {/* <Explore/> */}
            <Box sx={{ bottom:0,left:"0",right:0,position:'fixed',backgroundColor:"black"}} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} onClick={() => navigate('/explore')}/>
        <BottomNavigationAction label="Search" icon={<TravelExploreIcon />} onClick={() => navigate("")}/>
        <BottomNavigationAction label="My Plans" icon={<FavoriteIcon />} onClick={() => navigate("/plan")}/>
        <BottomNavigationAction label="Profile" icon={<SentimentSatisfiedAltIcon />} onClick={() => navigate("/profile")}/>
      </BottomNavigation>
      
    </Box>
        </>
    )
}