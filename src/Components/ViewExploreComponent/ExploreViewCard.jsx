import './ExploreViewCard.css'
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { PulseLoader } from 'react-spinners';
import BottomBar from '../BottomBar';
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
export default function ExploreView(){

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [loading ,setLloading]=React.useState(false)
    React.useEffect(()=>{
      setLloading(true)
      setTimeout(()=>{
        setLloading(false)
      },3000)
    },[])
    return(
        <>
            <div>
            {
          loading ? 
          <PulseLoader
          className='ec-loader'
            color={"#36d7b7"}
            loading={loading}
            size={10}
          />
            :
            <div className='ec'>
                <div className='ec-grid'>
                    <div className='ec-g-resp'>
                        <img className='head-icon' src='./assets/prev.png' alt='img' />
                    </div>
                    <div className='ec-g-resp'><p>Explore</p></div>
                    <div className='ec-g-resp'>
                    <img className='head-icon' src='./assets/menui.png' alt='img' />
                    </div>
                </div>
                <div className="ec-container">
                 <img className="ec-img" src="./assets/jaipur.jpg" alt='img' />
                </div>
                <div className="ec-name">
                  <p>City Name : </p>
                </div>
                <div className="ec-location">
                  <p>Location : </p>
                </div>
                <div className="ec-desc">
                  <p>Description : </p>
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
                  <div className="ec-about">
                  <button style={{color:"black",height:"50px",width:"150px"}}>Add to Plans</button>
                </div>
            </div>
            }
            </div>
        <BottomBar/>
        </>
    )
}