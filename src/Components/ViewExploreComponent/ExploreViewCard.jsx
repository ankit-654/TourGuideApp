import './ExploreViewCard.css'
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
export default function ExploreViewCard(){
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    return(
        <>
            <div className='ec'>
            <div className='ec-grid'>
                <div className='ec-g-resp'>
                    <img className='head-icon' src='./assets/prev.png' alt='icon' />
                </div>
                <div className='ec-g-resp'><p>Explore</p></div>
                <div className='ec-g-resp'>
                <img className='head-icon' src='./assets/menui.png' alt='icon' />
                </div>
            </div>
            <div className="ec-container">
            <img className="ec-img" src="./assets/jaipur.jpg" alt='img' />
            </div>
            <div className="ec-name">
              <p>City Name</p>
            </div>
            <div className="ec-location">
              <p>Location</p>
            </div>
            <div className="ec-desc">
              <p>Description</p>
            </div>
            <div className="ec-about">
              <p>About</p>
            </div>
            <div className='ec-rating'>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
            </div>
            </div>
            
        </>
    )
}