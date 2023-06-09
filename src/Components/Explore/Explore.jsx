import * as React from 'react';
import './Explore.css';
import { PulseLoader } from 'react-spinners';
import RajasthanCard from '../HomeCarousel/RajasthanCarousel';
import UttrakhandCarousel from '../HomeCarousel/UttrakhandCarousel';
import BottomBar from '../BottomBar';
export   const Explore= () =>{
  const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [loading ,setLloading]=React.useState(false)
    React.useEffect(()=>{
      setLloading(true)
      setTimeout(()=>{
        setLloading(false)
      },3000)
    },[])
  // const [value, setValue] = React.useState(0);
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
      
      {/* <div className='trip-advertise'>
       <div className='main-container'>
        <div className='guider'>
          <div className='front-side'>
            <h4> A tour guide who knows their stuff can greatly enhance your adventure.</h4>
            <input type="button"  value="Tap to see" className='input-back-button'/>
          </div>
          <div className='back-side'>
          <h3>Its not about the destination ,its about the<span>-  Journey  -</span> </h3>
          <input type="button"  value="Explore" className='input-back-button'/>
          </div>
        </div>
       </div>
      </div> */}
      {/* <a href='/demo'>Click</a> */}
     <div className='demo'>
        <div className='demo2'>
          <h4>Explore "The Pink City" of India</h4>
          <h6>The city is known for its bazaars,forts,<br/> temples, palaces, and wildlife sanctuaries</h6>
          <img src='/assets/jaipur.jpg' className='div-image' alt="img"/>
          <input type="button" value="Explore" className='explore-button' />
        </div>
     </div>
     
      
      <RajasthanCard/>
      <div className='divider1'>
        <div className='filldivider1'>
            <h3>One day in Mumbai City</h3>
            <p>Must see places from ocean to beach "Mumbai mode : on "</p>
            <button>Explore</button>
        </div>
      </div>
      <UttrakhandCarousel/>
      <div className='divider2'>
        <div className='filldivider1'>
            <h3>Trip to Ladakh</h3>
            <p>The heaven of India Leh Ladakh <br/>"Close to Heaven ,Down to Earth"</p>
            <button>Explore</button>
        </div>
      </div>
      <RajasthanCard/>
      
   <BottomBar/>
      
    </>

  );
} 